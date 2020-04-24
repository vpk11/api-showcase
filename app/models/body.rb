# frozen_string_literal: true

# Body Model
class Body < ApplicationRecord
  belongs_to :api

  BODY_TYPE = %w[none form-data x-www-form-urlencoded raw GraphQL].freeze

  def self.init(params)
    body = case params[:body_type]
           when 'none'
             Body.new(body_type: params[:body_type], api_id: params[:api_id])
           when 'form-data', 'x-www-form-urlencoded'
             Body.new(
               body_type: params[:body_type],
               key: params[:key],
               value_object: params[:value_object],
               api_id: params[:api_id],
               description: params[:description]
             )
           when 'raw'
             Body.new(
               body_type: params[:body_type],
               data_type: params[:data_type],
               data: params[:data],
               api_id: params[:api_id],
               description: params[:description]
             )
           when 'GraphQL'
             Body.new(
               body_type: params[:body_type],
               graphql_query: params[:graphql_query],
               graphql_variables: params[:graphql_variables],
               api_id: params[:api_id],
               description: params[:description]
             )
           end
    body
  end
end
