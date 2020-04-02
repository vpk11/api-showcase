# frozen_string_literal: true

# Account Model
class Account < ApplicationRecord
  has_many :projects
  has_many :users
end
