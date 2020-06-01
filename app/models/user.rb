# frozen_string_literal: true

# User Model
class User < ApplicationRecord
  has_secure_password
  before_validation :ensure_account_exists

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
  private

  def ensure_account_exists
    return if account_id.present?

    account = Account.create(name: name.split.first, archived: false)
    self.account_id = account.id
  end
end
