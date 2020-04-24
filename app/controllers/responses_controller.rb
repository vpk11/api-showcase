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
    else

    end
  end
end
