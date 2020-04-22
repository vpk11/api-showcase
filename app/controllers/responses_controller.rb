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
      render json: response
    else

    end
  end
end
