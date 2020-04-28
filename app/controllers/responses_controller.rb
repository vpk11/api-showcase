# frozen_string_literal: true

# Responses Controller
class ResponsesController < ApplicationController
  def create
    response = Response.new(
      data: params[:data],
      code: params[:code],
      status: params[:status],
      api_id: params[:api_id],
      description: params[:description]
    )
    if response.save
      api = Api.find params[:api_id]
      render json: api.responses
    end
  end

  def update
    response = Response.find(params[:id])
    if response.present?
      if response.update_attributes(
        data: params[:data],
        code: params[:code],
        status: params[:status],
        api_id: params[:api_id],
        description: params[:description]
      )
        render json: response.api.responses
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
        message: 'Response not found'
      }
    end
  end
end
