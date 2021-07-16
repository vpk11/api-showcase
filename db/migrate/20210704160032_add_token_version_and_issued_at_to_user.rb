# frozen_string_literal: true

class AddTokenVersionAndIssuedAtToUser < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :token_version, :integer, default: 1
    add_column :users, :token_issued_at, :datetime
  end
end
