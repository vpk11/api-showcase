# frozen_string_literal: true

# Body Model
class Body < ApplicationRecord
  belongs_to :api

  BODY_TYPE = %w[none form-data x-www-form-urlencoded raw GraphQL].freeze

  def self.form_params(params)
    case params[:body_type]
    when 'none'
      {
        body_type: params[:body_type],
        api_id: params[:api_id]
      }
    when 'form-data', 'x-www-form-urlencoded'
      {
        body_type: params[:body_type],
        key: params[:key],
        value_object: params[:value_object],
        api_id: params[:api_id],
        description: params[:description]
      }
    when 'raw'
      {
        body_type: params[:body_type],
        data_type: params[:data_type],
        data: params[:data],
        api_id: params[:api_id],
        description: params[:description]
      }
    when 'GraphQL'
      {
        body_type: params[:body_type],
        graphql_query: params[:graphql_query],
        graphql_variables: params[:graphql_variables],
        api_id: params[:api_id],
        description: params[:description]
      }
    end
  end

  def update_rec(params)
    update_attributes(Body.form_params(params))
  end

  def self.init(params)
    Body.new(form_params(params))
  end
end
