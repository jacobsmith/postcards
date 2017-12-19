class PostcardsController < ApplicationController
  def preview
    photo = Photo.find(params[:photoId])
    message = params[:message]
    font = params[:font] || "Gloria Hallelujah"
    font_size = params[:fontSize] || "14"
    alignment = params[:alignment] || "left"

    from_address = params[:address][:from].first
    to_addresses = params[:address][:to]

    front = render_as_string("4x6_postcard", front_photo_url: photo_view_url(photo))

    back = render_as_string("4x6_postcard_message", message: message, font: font, font_size: font_size, alignment: alignment)

    normalized_to_addresses = [];
    to_addresses.each do |to_address|
      normalized_to_addresses.push({
        name: to_address[:addressName],
        address_line1: to_address[:street],
        address_city: to_address[:city],
        address_state: to_address[:state],
        address_country: "US",
        address_zip: to_address[:zip],
        })
      end

      from_address_arguments = {
        name: from_address[:addressName],
        address_line1: from_address[:street],
        address_city: from_address[:city],
        address_state: from_address[:state],
        address_country: "US",
        address_zip: from_address[:zip],
      }

      # create a to address
      to_address = $LobTest.addresses.create(normalized_to_addresses.first)

      # create a from address
      from_address = $LobTest.addresses.create(from_address_arguments)

      internal_postcard = Postcard.create(
        photo:        photo,
        message:      message,
        font:         font,
        font_size:    font_size,
        alignment:    alignment,
        to_address:   normalized_to_addresses.to_json,
        from_address: from_address_arguments.to_json,
      )

      # send a postcard
      postcard = $LobTest.postcards.create(
        to: to_address['id'],
        from: from_address['id'],
        front: front,
        back: back
      )

      puts postcard # debug

      thumbnail_urls = postcard["thumbnails"].map { |t| t['large'] }


      # S3 doesn't update immediately when we get back the URL for the thumbnails - so we poll until it's successful
      threads = []
      thumbnail_urls.each do |url_to_check|
        threads << Thread.new do
          loop do
            puts "Getting thumbnail for #{url_to_check}"
            break if Net::HTTP.get_response(URI(url_to_check)).code == "200"
            sleep 1
          end
        end
      end

      threads.map(&:join)

      render json: {
        front: thumbnail_urls.first,
        back: thumbnail_urls.last,
        postcard_id: internal_postcard.id
      }
    end

    def create
      postcard = Postcard.find(params[:postcard_id])
      token = params[:stripeToken]
      use_credit = params[:use_credit]

      to_addresses = JSON.parse(postcard.to_address)
      number_of_postcards = to_addresses.length

      from_address = JSON.parse(postcard.from_address)

      can_continue = false

      if use_credit
        return render json: { error: "You don't have enough credits for this transaction." } unless current_user.credits >= number_of_postcards
        current_user.update!(credits: current_user.credits - number_of_postcards)
        can_continue = true
      else
        # Charge the user's card:
        charge = $Stripe::Charge.create(
          :amount => number_of_postcards * 149,
          :currency => "usd",
          :description => "Postcard",
          :source => token["id"],
          metadata: { postcard_id: postcard.id }
        )

        if charge[:outcome][:type] == "authorized"
          can_continue = true
        end
      end


      if can_continue
        to_addresses.each do |to_address|
          puts "to_address: #{to_address.inspect}"

          lob_to_address = $Lob.addresses.create(to_address)
          lob_from_address = $Lob.addresses.create(from_address)
          front = render_as_string("4x6_postcard", front_photo_url: photo_view_url(postcard.photo))
          back = render_as_string(
            "4x6_postcard_message",
            message:   postcard.message,
            font:      postcard.font,
            font_size: postcard.font_size,
            alignment: postcard.alignment
          )

          lob_client = Rails.env.production? ? $Lob : $LobTest

          lob_postcard = lob_client.postcards.create(
            to: lob_to_address["id"],
            from: lob_from_address["id"],
            front: front,
            back: back,
            size: '4x6',
            metadata: {
              postcard_id: postcard.id,
            }
          )

          puts lob_postcard
        end

        render json: { success: true }
      else
        render json: { success: false }
      end

    rescue Lob::InvalidRequestError => e
      puts e.json_body

      NotifyMeMailer.oh_shit(
        postcard_id: postcard.id,
        errors: { original: e.json_body.inspect, backtrace: e.backtrace },
        current_user: current_user,
        used_credits: use_credit
      ).deliver_now

      if (use_credit)
        current_user.credits += number_of_postcards
        current_user.save
      end

      render json: e.json_body
    end

    private

    def render_as_string(template, **values)
      templates_dir = "#{Rails.root}/app/views/"
      template_file = "#{template}.html.erb"
      ActionView::Base.new(templates_dir).render(
        :file => template_file,
        :locals => values
      )
    end
  end
