class Address < ApplicationRecord
  before_save :set_address_hash
  serialize :address, AddressSchema

  belongs_to :user

  delegate :to_lob_compatible_hash, to: :address

  private

  def set_address_hash
    self.schema_hash = address.schema_hash
  end
end
