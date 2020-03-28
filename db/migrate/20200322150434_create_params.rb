# frozen_string_literal: true

# Create params table
class CreateParams < ActiveRecord::Migration[6.0]
  def change
    create_table :params do |t|
      t.string :key
      t.string :value_object
      t.integer :api_id
      t.text :description

      t.timestamps
    end
  end
end
