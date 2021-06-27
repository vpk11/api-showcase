# frozen_string_literal: true

# Apis Controller
class ApisController < ApplicationController
  skip_before_action :verify_authenticity_token
  def new
    @version = Version.find(params[:version_id])
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

  def edit
    # TODO: Implement this method
  end

  def update
    # TODO: Implement record update here
  end

  def archive
    api = Api.find(params[:id])
    api.archived = true
    api_json(api) if api.save!
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
    version = api.version
    results = version.api_details
    render json: results
  end
end
