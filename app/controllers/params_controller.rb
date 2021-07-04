# frozen_string_literal: true

# Params Controller
class ParamsController < ApplicationController
  def create
    param = Param.new(param_params)

    if param.save
      api = Api.find params[:api_id]
      render json: api.params, status: :ok
    end
  end

  def update
    param = Param.find(params[:id])

    if param&.update(param_params)
      render json: param.api.params, status: :ok
    else
      render_json(:unprocessable_entity, 'Record update failed')
    end
  end

  def destroy
    param = Param.find(params[:id])
    api = param.api

    if param.destroy
      render json: api.params
    else
      render_json(:unprocessable_entity, 'Delete failed')
    end
  end

  private

  def param_params
    params.permit(:key, :value_object, :api_id, :description)
  end
end
