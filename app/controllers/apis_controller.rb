# frozen_string_literal: true

# Apis Controller
class ApisController < ApplicationController
  def new
    @version = Version.first
    @methods = Api::METHODS
  end

  def create
    @api = Api.new(
      method: params[:method], end_point: params[:end_point],
      description: params[:description], version_id: params[:version_id]
    )
    if @api.save
      redirect_to api_path(@api.reload)
    else
      @version = Version.find(params[:version_id])
      @methods = Api::METHODS
    end
  end
end
