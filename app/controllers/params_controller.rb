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
        message: 'Params not found'
      }
    end
  end
end
