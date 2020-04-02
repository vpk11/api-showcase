# frozen_string_literal: true

# Create responses table
class CreateResponses < ActiveRecord::Migration[6.0]
  def change
    create_table :responses do |t|
      t.text :data
      t.string :code
      t.string :status
      t.integer :api_id
      t.text :description

      t.timestamps
    end
  end
end
