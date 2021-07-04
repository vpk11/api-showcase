# frozen_string_literal: true

# Controller For Versions
class VersionsController < ApplicationController
  skip_before_action :verify_authenticity_token
  def index
    @project = Project.first
    @version = @project.version
  end

  def new
    @project = Project.first
  end

  def create
    version = Version.new(version_params)

    if version.save
      redirect_to projects_path
    else
      @project = Project.find(params[:project_id])
    end
  end

  def show
    version = Version.find(params[:id])
    @results = version.api_details
  end

  def update
    version = Version.find(params[:id])
    version_json(version) if version.update(version_params)
  end

  def destroy
    version = Version.find(params[:id])

    if version.destroy
      version_json(version)
    else
      render_json(:unprocessable_entity, 'Record deletion failed')
    end
  end

  private

  def version_json(version)
    project = version.project
    results = project.version_details
    render json: results, status: :ok
  end

  def version_params
    params.permit(:name, :active, :project_id)
  end
end
