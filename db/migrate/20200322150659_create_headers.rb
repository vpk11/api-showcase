# frozen_string_literal: true

# Create headers table
class CreateHeaders < ActiveRecord::Migration[6.0]
  def change
    create_table :headers do |t|
      t.string :key
      t.string :value_object
      t.integer :api_id
      t.text :description

      t.timestamps
    end
  end
end
