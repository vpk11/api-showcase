# frozen_string_literal: true

# User Model
class User < ApplicationRecord
  # has_secure_password
  belongs_to :account
  has_many :projects

  def project_details
    projects.left_outer_joins(:versions).active.distinct
            .select(:id, :name, :description).map do |pr|
      {
        id: pr.id, project_name: pr.name, description: pr.description,
        versions: pr.version_details
      }
    end
  end
end

# sql = "SELECT projects.id, projects.name, projects.description FROM projects LEFT JOIN versions ON projects.id = versions.project_id AND versions.active = true WHERE projects.archived = false"
