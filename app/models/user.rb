# frozen_string_literal: true

# User Model
class User < ApplicationRecord
  # has_secure_password
  belongs_to :account
  has_many :projects

  def project_details
    projects.where(archived: false).includes(:versions).active
            .select(:id, :name, :description).order(:id).map do |pr|
      {
        id: pr.id, project_name: pr.name, description: pr.description,
        versions: pr.version_details
      }
    end
  end
end
