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
    @version = Version.first
    @apis = @version.apis
  end

  def edit
  end

  def update
  end

  def destroy
  end
end
