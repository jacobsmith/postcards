class PostcardsController < ApplicationController
  def preview
    photo = Photo.find(params[:photo_id])
    message = params[:message]

    front = render_as_string("4x6_postcard", front_photo_url: front_photo_url(photo))

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
    puts $Lob.postcards.create(
      description: "Beach Postcard",
      to: to_address["id"],
      from: from_address["id"],
      front: front,
      message: message
    )
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
