# frozen_string_literal: true

# Body Model
class Body < ApplicationRecord
  belongs_to :api

  BODY_TYPE = %w[none form-data x-www-form-urlencoded raw GraphQL]
end
