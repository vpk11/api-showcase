# frozen_string_literal: true

# Apis Controller
class ApisController < ApplicationController
  skip_before_action :verify_authenticity_token
  def new
    @version = Version.first
    @methods = Api::METHODS
  end

  def create
    @api = Api.init(params)
    if @api.save
      redirect_to api_path(@api.reload)
    else
      @version = Version.find(params[:version_id])
      @methods = Api::METHODS
    end
  end

  def show
    @api = Api.find(params[:id])
    @version = @api.version
    @parameters = @api.params
    @headers = @api.headers
    @bodies = @api.bodies
    @responses = @api.responses
  end

  def update
    api = Api.find(params[:id])
    api.archived = true
    if api.save!
      api_json(api)
    end
  end

  def destroy
    api = Api.find(params[:id])
    if api.destroy
      api_json(api)
    else
      render json: {
        status: 'error',
        code: 600,
        message: 'Record deletion failed'
      }
    end
  end

  private

  def api_json(api)
    apis = api.version.apis.where(archived: 'false')
    @result = apis.map {|api| {:apiId => api.id, :apiMethod => api.method, :apiEndPoint => api.end_point, 
      :apiDescription => api.description, :parameters => api.params.as_json, :headers => api.headers.as_json, 
      :bodies => api.bodies.as_json, :responses => api.responses.as_json}}
      render json: @result
  end
end