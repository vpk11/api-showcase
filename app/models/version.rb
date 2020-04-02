# frozen_string_literal: true

# Version Model
class Version < ApplicationRecord
  belongs_to :project
  has_many :apis
end
