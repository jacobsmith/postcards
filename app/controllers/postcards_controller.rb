class PostcardsController < ApplicationController
  def preview
    photo = Photo.find(params[:photoId])
    message = params[:message]

    front = render_as_string("4x6_postcard", front_photo_url: photo_view_url(photo))

    # create a to address
    to_address = $Lob.addresses.create(
      name: "ToAddress",
      address_line1: "120 6th Ave",
      address_city: "Boston",
      address_state: "MA",
      address_country: "US",
      address_zip: 12345
    )

    # create a from address
    from_address = $Lob.addresses.create(
      name: "FromAddress",
      address_line1: "120 6th Ave",
      address_city: "Boston",
      address_state: "MA",
      address_country: "US",
      address_zip: 12345
    )


    # send a postcard
    postcard = $Lob.postcards.create(
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
      back: thumbnail_urls.last
    }
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
