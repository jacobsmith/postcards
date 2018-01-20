class AddressSchema < Soulless::Model
  attribute :nickname,             String
  attribute :name,                 String
  attribute :street,               String
  attribute :city,                 String
  attribute :state,                String
  attribute :country,              String
  attribute :zip,                  String
  attribute :default_from_address, Boolean

  def schema_hash
    md5 = Digest::MD5.new
    md5.update([*attributes].join(''))
    md5.hexdigest
  end

  def to_lob_compatible_hash
    {
      name:            name,
      address_line1:   street,
      address_city:    city,
      address_state:   state,
      address_country: "US",
      address_zip:     zip
    }
  end
end
