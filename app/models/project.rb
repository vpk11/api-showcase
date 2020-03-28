# frozen_string_literal: true

# Project Model
class Project < ApplicationRecord
  
  belongs_to :account
  belongs_to :user_id
  has_many :versions

end
