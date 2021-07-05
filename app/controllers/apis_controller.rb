# frozen_string_literal: true

# Apis Controller
class ApisController < ApplicationController
  before_action :build_version_and_methods, only: :new

  def create
    @api = Api.init(params)

    if @api.save
      redirect_to api_path(@api.reload)
    else
      build_version_and_methods
    end
  end

  def show
    @api = Api.find(params[:id])
  end

  def edit
    # TODO: Implement this method
  end

  def update
    # TODO: Implement record update here
  end

  def destroy
    api = Api.find(params[:id])

    if api.destroy
      api_json(api)
    else
      render_json(:unprocessable_entity, 'Delete failed')
    end
  end

  private

  def api_json(api)
    version = api.version
    results = version.api_details
    render json: results, status: :ok
  end

  def build_version_and_methods
    @version = Version.find(params[:version_id])
    @methods = Api::METHODS
  end
end
