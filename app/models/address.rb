class Address < ApplicationRecord
  def to_json
    address = OpenStruct.new(verified_address)

    {
      addressName: address.name,
      street: address.address_line1,
      city: address.address_city,
      state: address.address_state,
      country: address.address_country,
      zip: address.address_zip,
      lob_id: address.id,
      id: id,
      default_from_address: default_from_address
    }
  end
end
