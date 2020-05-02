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
    @version = Version.find(params[:id])
    @apis = @version.apis
    @result = @apis.map {|api| {:apiId => api.id, :apiMethod => api.method, :apiEndPoint => api.end_point, 
      :apiDescription => api.description, :parameters => api.params.as_json, :headers => api.headers.as_json, 
      :bodies => api.bodies.as_json, :responses => api.responses.as_json}}
  end

  def edit
  end

  def update
    version = Version.find(params[:id])
    version.active = false;
    version.deprecated = true;
    if version.save!
      version_json(version)
    end
  end

  def destroy
    version = Version.find(params[:id])
    if version.destroy
       version_json(version)
    else
      render json: {
        status: 'error',
        code: 600,
        message: 'Record deletion failed'
      }
    end
  end

  private

  def version_json(version)
    versions = version.project.versions.where(active: 'true').select(:id, :name).order(:id)
    result = versions.map {|version| {:id => version.id, :name => version.name}}
    render json: result
  end 
end
