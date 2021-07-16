# frozen_string_literal: true

# Controller to manage requests to projects
class ProjectsController < ApplicationController
  skip_before_action :verify_authenticity_token
  def index
    @results = current_user.project_details
  end

  def new
    @user = current_user
    @account = @user.account
  end

  def create
    project = Project.new(project_params)

    if project.save
      redirect_to projects_path
    else
      @user = User.find(params[:user_id])
      @account = @user.account
    end
  end

  def update
    project = Project.find(params[:id])
    project_json(project) if project.update(update_project_params)
  end

  def destroy
    project = Project.find(params[:id])

    if project.destroy
      project_json(project)
    else
      render_json(:unprocessable_entity, 'Record deletion failed')
    end
  end

  private

  def project_json(project)
    user = project.user
    @results = user.project_details
    render json: @results, status: :ok
  end

  def update_project_params
    params.require(:project).permit(:name, :description)
  end

  def project_params
    params.permit(:name, :description, :user_id, :account_id)
  end
end
