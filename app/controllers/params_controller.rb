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
      render json: param
    else

    end
  end
end
