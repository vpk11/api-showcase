# frozen_string_literal: true

# Users Controller
class UsersController < ApplicationController
  skip_before_action :authorized, only: %i[new create]

  # SignUp form
  def new
    redirect_to new_project_path if logged_in?
  end

  # SignUp - Create User
  def create
    @user = User.new(name: params[:name], email: params[:email],
                     password: params[:password])
    if @user.save
      session[:user_id] = @user.id
      redirect_to new_project_path
    else
      render :new
    end
  end
end
