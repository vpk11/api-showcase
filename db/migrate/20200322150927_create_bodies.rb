# frozen_string_literal: true

# Create bodies table
class CreateBodies < ActiveRecord::Migration[6.0]
  def change
    create_table :bodies do |t|
      t.string :body_type
      t.string :key
      t.text :value_object
      t.text :graphql_query
      t.text :graphql_variable
      t.text :description
      t.integer :api_id

      t.timestamps
    end
  end
end
