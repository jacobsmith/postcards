class User < ApplicationRecord
  has_secure_password
  validates :email, presence: true, uniqueness: true, nil: false
  validates :credits, numericality: { only_integer: true, greater_than_or_equal_to: 0 }
  has_many :addresses
end
