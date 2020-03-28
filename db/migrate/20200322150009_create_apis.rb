# frozen_string_literal: true

# Create apis table
class CreateApis < ActiveRecord::Migration[6.0]
  def change
    create_table :apis do |t|
      t.string :method
      t.string :end_point
      t.boolean :archived, deault: false
      t.integer :version_id

      t.timestamps
    end
  end
end
