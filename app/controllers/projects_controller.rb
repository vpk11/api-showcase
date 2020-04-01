# frozen_string_literal: true

# Controller to manage requests to projects
class ProjectsController < ApplicationController
  def index
    @projects = Project.includes(:versions).active
  end

  def new
    @user = User.first
    @account = @user.account
  end

  def create

  end
end
