# frozen_string_literal: true

# Project Model
class Project < ApplicationRecord
  belongs_to :account
  belongs_to :user
  has_many :versions, dependent: :destroy

  scope :active, -> { where(archived: false) }

  def version_details
    versions.map { |v| { id: v.id, name: v.name } }
  end
end
