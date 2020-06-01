# frozen_string_literal: true

# Controller to manage requests to projects
class ProjectsController < ApplicationController
  skip_before_action :verify_authenticity_token
  def index
    user = User.first
    @results = user.project_details
  end

  def new
    @user = User.first
    @account = @user.account
  end

  def create
    project = Project.new(
      name: params[:name], description: params[:description],
      user_id: params[:user_id], account_id: params[:account_id]
    )
    if project.save!
      redirect_to projects_path
    else
      @user = User.find(params[:user_id])
      @account = @user.account
    end
  end

  def update
    project = Project.find(params[:id])
    project.archived = true
    project_json(project) if project.save!
  end

  def destroy
    project = Project.find(params[:id])
    if project.destroy
      project_json(project)
    else
      render json: {
        status: 'error', code: 600, message: 'Record deletion failed'
      }
    end
  end

  private

  def project_json(project)
    user = project.user
    @results = user.project_details
    render json: @results
  end
end
