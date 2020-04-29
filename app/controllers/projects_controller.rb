# frozen_string_literal: true

# Controller to manage requests to projects
class ProjectsController < ApplicationController
  def index
    @projects = Project.includes(:versions).active.select(:id, :name)
    @result = @projects.map {|project| {:projectId => project.id, :projectName => project.name, 
      :versions => project.version_details}}
  end

  def new
    @user = User.first
    @account = @user.account
  end

  def create
    project = Project.new(
      name: params[:name],
      description: params[:description],
      user_id: params[:user_id],
      account_id: params[:account_id]
    )
    if project.save!
      redirect_to projects_path
    else
      @user = User.find(params[:user_id])
      @account = @user.account
    end
  end

end
