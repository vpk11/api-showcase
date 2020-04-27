# frozen_string_literal: true

# Headers Controller
class HeadersController < ApplicationController
  def create
    header = Header.new(
      key: params[:key],
      value_object: params[:value_object],
      api_id: params[:api_id],
      description: params[:description]
    )
    if header.save
      api = Api.find params[:api_id]
      render json: api.headers
    end
  end

  def update
    header = Header.find(params[:id])
    if header.present?
      if header.update_attributes(
        key: params[:key],
        value_object: params[:value_object],
        api_id: params[:api_id],
        description: params[:description]
      )
        render json: header.api.headers
      else
        render json: {
          status: 'error',
          code: 600,
          message: 'Record update failed'
        }
      end
    else
      render json: {
        status: 'error',
        code: 404,
        message: 'Header not found'
      }
    end
  end
end
