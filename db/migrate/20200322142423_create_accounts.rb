# frozen_string_literal: true

# Create accounts table
class CreateAccounts < ActiveRecord::Migration[6.0]
  def change
    create_table :accounts do |t|
      t.string :name, null: false
      t.boolean :archived, default: false, null: false

      t.timestamps
    end
  end
end
