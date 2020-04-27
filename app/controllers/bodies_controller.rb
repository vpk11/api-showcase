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

  def update
    body = Body.find(params[:id])
    if body.present?
      if body.update_rec(params)
        render json: body.api.bodies
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
        message: 'Body not found'
      }
    end
  end
end
