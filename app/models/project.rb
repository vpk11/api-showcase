# frozen_string_literal: true

# Project Model
class Project < ApplicationRecord
  belongs_to :account
  belongs_to :user
  has_many :versions, dependent: :destroy

  scope :active, -> { where(archived: false) }

  def version_details
    versions.active.map { |version| { id: version.id, name: version.name } }
  end

  def archive_record
    self.update(archived: true)
  end
end
