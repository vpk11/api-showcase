# frozen_string_literal: true

# Create users table
class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.boolean :admin
      t.integer :account_id
      t.boolean :archived, default: false

      t.timestamps
    end
  end
end
