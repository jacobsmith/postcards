class PostcardsController < ApplicationController
  def preview
    photo = Photo.find(params[:photoId])
    message = params[:message]
    font = params[:font] || "Gloria Hallelujah"
    font_size = params[:fontSize] || "14"
    alignment = params[:alignment] || "left"

    from_address = params[:address][:from]
    to_address = params[:address][:to]

    front = render_as_string("4x6_postcard", front_photo_url: photo_view_url(photo))

    back = render_as_string("4x6_postcard_message", message: message, font: font, font_size: font_size, alignment: alignment)

    to_address_arguments = {
      name: to_address[:addressName],
      address_line1: to_address[:street],
      address_city: to_address[:city],
      address_state: to_address[:state],
      address_country: "US",
      address_zip: to_address[:zip],
    }

    from_address_arguments = {
      name: from_address[:addressName],
      address_line1: from_address[:street],
      address_city: from_address[:city],
      address_state: from_address[:state],
      address_country: "US",
      address_zip: from_address[:zip],
    }

    # create a to address
    to_address = $LobTest.addresses.create(to_address_arguments)

    # create a from address
    from_address = $LobTest.addresses.create(from_address_arguments)

    internal_postcard = Postcard.create(
      photo:        photo,
      message:      message,
      font:         font,
      font_size:    font_size,
      alignment:    alignment,
      to_address:   to_address_arguments.to_json,
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

    # Charge the user's card:
    charge = $Stripe::Charge.create(
      :amount => 149,
      :currency => "usd",
      :description => "Postcard",
      :source => token["id"],
      metadata: { postcard_id: postcard.id }
    )

    if charge[:outcome][:type] == "authorized"
      to_address = $Lob.addresses.create(JSON.parse(postcard.to_address))
      from_address = $Lob.addresses.create(JSON.parse(postcard.from_address))
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
        to: JSON.parse(postcard.to_address),
        from: JSON.parse(postcard.from_address),
        front: front,
        back: back,
        size: '4x6',
        metadata: {
          postcard_id: postcard.id,
        }
      )

      puts lob_postcard

      render json: { success: true }
    else
      render json: { success: false }
    end
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
