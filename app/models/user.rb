# frozen_string_literal: true

# User Model
class User < ApplicationRecord
  # has_secure_password
  belongs_to :account
  has_many :projects

end
