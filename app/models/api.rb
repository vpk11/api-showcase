# frozen_string_literal: true

# Api Model
class Api < ApplicationRecord
  belongs_to :version
  has_many :params
  has_many :headers
  has_many :bodies
  has_many :responses

  METHODS = %w[GET POST PATCH PUT DELETE].freeze

  def self.init(params)
    Api.new(
      method: params[:method], end_point: params[:end_point],
      description: params[:description], version_id: params[:version_id],
      archived: params[:archived]
    )
  end
end
