# frozen_string_literal: true

# Project Model
class Project < ApplicationRecord
  belongs_to :account
  belongs_to :user
  has_many :versions

  scope :active, -> { where(archived: false) }
end
