# frozen_string_literal: true

# Bodies Controller
class BodiesController < ApplicationController
  def create
    body = Body.init(params)
    if body.save
      api = Api.find params[:api_id]
      render json: api.bodies
    else

    end
  end
end
