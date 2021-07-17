# frozen_string_literal: true

class AddNameFieldsToUser < ActiveRecord::Migration[6.1]
  def change
    rename_column :users, :name, :user_name
    add_column :users, :first_name, :string
    add_column :users, :middle_name, :string
    add_column :users, :last_name, :string

    add_index :users, :user_name
  end
end
