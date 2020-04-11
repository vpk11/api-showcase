# frozen_string_literal: true

# Api Model
class Api < ApplicationRecord
  belongs_to :version
  has_many :params
  has_many :headers
  has_many :bodies
  has_many :responses

  METHODS = %w[GET POST PATCH PUT DELETE].freeze
end
