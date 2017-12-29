class AddressesController < ApplicationController
  def index
    if current_user.present?
      render json: current_user.addresses.map(&:to_json)
    else
      render json: []
    end
  end

  def create
    address_arguments = {
      name: params[:addressName],
      address_line1: params[:street],
      address_city: params[:city],
      address_state: params[:state],
      address_country: params[:country],
      address_zip: params[:zip]
    }

    lob_address = $Lob.addresses.create(address_arguments)

    if lob_address.try(:[], "id") # if it has an id, it was successful
      new_address = current_user.addresses.create(
        address: address_arguments,
        verified_address: lob_address,
        lob_id: lob_address["id"],
      )

      render json: new_address.to_json
    else
      render json: { error: lob_address.error }
    end

  rescue Lob::InvalidRequestError => e
    render json: { error: JSON.parse(e.http_body)["error"]["message"] }
  end
end
