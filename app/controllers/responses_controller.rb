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
        render_json('error', 600, 'Record update failed')
      end
    else
      render_json('error', 404, 'Response not found')
    end
  end

  def destroy
    response = Response.find(params[:id])
    api = response.api
    if response.destroy
      render json: api.responses
    else
      render_json('error', 404, 'Delete failed')
    end
  end

  private

  def render_json(status, code, message)
    render json: {
      status: status,
      code: code,
      message: message
    }
  end
end
