class AddressesController < ApplicationController
  def index
    return unless current_user.present?

    @addresses = current_user.addresses
  end

  def create
    address_arguments = {
      name: params[:addressName],
      street: params[:street],
      city: params[:city],
      state: params[:state],
      country: params[:country],
      zip: params[:zip]
    }

    address_schema = AddressSchema.new(address_arguments)

    # return if the address already exists
    render json: {} and return if current_user.addresses.where(schema_hash: address_schema.schema_hash).any?

    new_address = current_user.addresses.new(address: address_schema)

    if new_address.save
      @address = new_address
    else
      render json: { error: new_address.errors }
    end
  end
end
