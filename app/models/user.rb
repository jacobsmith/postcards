class User < ApplicationRecord
  has_secure_password
  validates :email, presence: true, uniqueness: true, nil: false
  validates :password, length: { minimum: 8, maximum: 60 }
end
