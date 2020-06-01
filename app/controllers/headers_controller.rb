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
        render_json('error', 600, 'Record update failed')
      end
    else
      render_json('error', 404, 'Header not found')
    end
  end

  def destroy
    header = Header.find(params[:id])
    api = header.api
    if header.destroy
      render json: api.headers
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
