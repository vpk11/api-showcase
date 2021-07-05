# frozen_string_literal: true

# Headers Controller
class HeadersController < ApplicationController
  def create
    header = Header.new(header_params)
    if header.save
      api = Api.find params[:api_id]
      render json: api.headers, status: :ok
    end
  end

  def update
    header = Header.find(params[:id])

    if header&.update(header_params)
      render json: header.api.headers, status: :ok
    else
      render_json(:unprocessable_entity, 'Record update failed')
    end
  end

  def destroy
    header = Header.find(params[:id])
    api = header.api

    if header.destroy
      render json: api.headers
    else
      render_json(:unprocessable_entity, 'Delete failed')
    end
  end

  private

  def header_params
    params.permit(:key, :value_object, :api_id, :description)
  end
end
