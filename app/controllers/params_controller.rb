# frozen_string_literal: true

# Params Controller
class ParamsController < ApplicationController
  def create
    param = Param.new(
      key: params[:key],
      value_object: params[:value_object],
      api_id: params[:api_id],
      description: params[:description]
    )
    if param.save
      api = Api.find params[:api_id]
      render json: api.params
    end
  end

  def update
    param = Param.find(params[:id])
    if param.present?
      if param.update_attributes(
        key: params[:key],
        value_object: params[:value_object],
        api_id: params[:api_id],
        description: params[:description]
      )
        render json: param.api.params
      else
        render_json('error', 600, 'Record update failed')
      end
    else
      render_json('error', 404, 'Params not found')
    end
  end

  def destroy
    param = Param.find(params[:id])
    api = param.api
    if param.destroy
      render json: api.params
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
