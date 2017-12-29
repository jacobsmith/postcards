class User < ApplicationRecord
  has_secure_password
  validates :email, presence: true, uniqueness: true, nil: false
  validates :credits, numericality: { only_integer: true, greater_than_or_equal_to: 0 }
  has_many :addresses

  def default_from_address
    addresses.find_by(default_from_address: true)
  end

  def set_default_from_address(address)
    ActiveRecord::Base.transaction do
      user.addresses.update_all(default_from_address: false)
      address.update(default_from_address: true)
    end
  end
end
