# frozen_string_literal: true

class User < ApplicationRecord
  attribute :admin, :boolean, default: false

  validates :user_name, presence: true, uniqueness: true, length: { minimum: 3 }
  validates :email, presence: true, uniqueness: true
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :password, presence: true, on: :create
  validates :password_confirmation, presence: true, on: :create

  belongs_to :account

  has_many :projects
  has_secure_password

  before_validation :ensure_account_exists

  def full_name
    "#{first_name} #{middle_name} #{last_name}".squish
  end

  def project_details
    projects.left_outer_joins(:versions).active.distinct.select(:id, :name, :description).map do |project|
      {
        id: project.id, project_name: project.name,
        description: project.description, versions: project.version_details
      }
    end
  end

  def upgrade_token_version
    self.update(token_version: token_version + 1, token_issued_at: Time.current)
  end

  private

  def ensure_account_exists
    return if account_id.present?

    account = Account.create(name: name.split.first, archived: false)
    self.account_id = account.id
  end
end
