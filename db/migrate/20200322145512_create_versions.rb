# frozen_string_literal: true

# Create versions table
class CreateVersions < ActiveRecord::Migration[6.0]
  def change
    create_table :versions do |t|
      t.string :name
      t.boolean :deprecated, default: false
      t.boolean :active, default: false
      t.integer :project_id

      t.timestamps
    end
  end
end
