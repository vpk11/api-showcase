# frozen_string_literal: true

# Apis Controller
class ApisController < ApplicationController
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
end
