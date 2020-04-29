# frozen_string_literal: true

# Controller For Versions
class VersionsController < ApplicationController
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
  end

  def destroy
  end
end
