# frozen_string_literal: true

# Responses Controller
class ResponsesController < ApplicationController
  def create
    response = Response.new(response_params)

    if response.save
      api = Api.find params[:api_id]
      render json: api.responses, status: :ok
    else
      render_json(:unprocessable_entity, 'Unable to create Response')
    end
  end

  def update
    response = Response.find(params[:id])

    if response&.update(response_params)
      render json: response.api.responses, status: :ok
    else
      render_json(:unprocessable_entity, 'Failed to update Response')
    end
  end

  def destroy
    response = Response.find(params[:id])
    api = response.api
    if response.destroy
      render json: api.responses, status: :ok
    else
      render_json(:unprocessable_entity, 'Delete failed')
    end
  end

  private
  
  def response_params
    params.permit(:data, :code, :status, :api_id, :description)
  end
end
