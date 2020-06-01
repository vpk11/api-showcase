# frozen_string_literal: true

# User Model
class User < ApplicationRecord
  has_secure_password
  before_validation :ensure_account_exists

  belongs_to :account
  has_many :projects

  private

  def ensure_account_exists
    return if account_id.present?

    account = Account.create(name: name.split.first, archived: false)
    self.account_id = account.id
  end
end
