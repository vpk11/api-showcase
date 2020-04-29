# frozen_string_literal: true

# Bodies Controller
class BodiesController < ApplicationController
  def create
    body = Body.init(params)
    if body.save
      api = Api.find params[:api_id]
      render json: api.bodies
    end
  end

  def update
    body = Body.find(params[:id])
    if body.present?
      if body.update_rec(params)
        render json: body.api.bodies
      else
        render_json('error', 600, 'Record update failed')
      end
    else
      render_json('error', 404, 'Body not found')
    end
  end

  def destroy
    body = Body.find(params[:id])
    api = body.api
    if body.destroy
      render json: api.bodies
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
