# frozen_string_literal: true

# Create projects table
class CreateProjects < ActiveRecord::Migration[6.0]
  def change
    create_table :projects do |t|
      t.string :name
      t.string :description
      t.boolean :archived, default: false
      t.integer :account_id
      t.integer :user_id

      t.timestamps
    end
  end
end
