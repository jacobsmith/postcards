class PostcardsController < ApplicationController
  def preview
    photo = Photo.find(params[:photoId])
    message = params[:message]

    from_address = params[:address][:from]
    to_address = params[:address][:to]

    front = render_as_string("4x6_postcard", front_photo_url: photo_view_url(photo))

    # create a to address
    to_address = $Lob.addresses.create(
      name: to_address[:addressName],
      address_line1: to_address[:street],
      address_city: to_address[:city],
      address_state: to_address[:state],
      address_country: "US",
      address_zip: to_address[:zip],
    )

    # create a from address
    from_address = $Lob.addresses.create(
      name: from_address[:addressName],
      address_line1: from_address[:street],
      address_city: from_address[:city],
      address_state: from_address[:state],
      address_country: "US",
      address_zip: from_address[:zip],
    )

    # Dear future jacob,
    # figure out how to make postcard_id autoincrementing. It's not set up correctly.
    # Love, past jacob

    internal_postcard = Postcard.create(
      photo: photo,
      message: message,
      to_address_lob_id: to_address['id'],
      from_address_lob_id: from_address['id']
    )

    # send a postcard
    postcard = $LobTest.postcards.create(
      to: to_address["id"],
      from: from_address["id"],
      front: front,
      message: message
    )

    puts postcard # debug

    thumbnail_urls = postcard["thumbnails"].map { |t| t['large'] }

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
