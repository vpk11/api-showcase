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
    version = Version.new(
      name: params[:name],
      active: params[:active] || false,
      project_id: params[:project_id]
    )
    if version.save!
      redirect_to projects_path
    else
      @project = Project.find(params[:project_id])
    end
  end

  def show
    version = Version.find(params[:id])
    @results = version.api_details
  end

  def edit; end

  def update
    version = Version.find(params[:id])
    version.active = false
    version.deprecated = true
    version_json(version) if version.save!
  end

  def destroy
    version = Version.find(params[:id])
    if version.destroy
      version_json(version)
    else
      render json: {
        status: 'error', code: 600, message: 'Record deletion failed'
      }
    end
  end

  private

  def version_json(version)
    project = version.project
    results = project.version_details
    render json: results
  end
end
