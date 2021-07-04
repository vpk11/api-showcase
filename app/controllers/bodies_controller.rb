# frozen_string_literal: true

# Bodies Controller
class BodiesController < ApplicationController
  def create
    body = Body.init(params)
    
    if body.save
      api = Api.find params[:api_id]
      render json: api.bodies, status: :ok
    end
  end

  def update
    body = Body.find(params[:id])

    if body&.update_rec(params)
      render json: body.api.bodies, status: :ok
    else
      render_json(:unprocessable_entity, 'Record update failed')
    end
  end

  def destroy
    body = Body.find(params[:id])
    api = body.api

    if body.destroy
      render json: api.bodies, status: :ok
    else
      render_json(:unprocessable_entity, 'Delete failed')
    end
  end
end
