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
    @user = User.new(user_params)

    if @user.save
      login_user
    else
      render :new
    end
  end

  private

  def user_params
    params.permit(:name, :email, :password)
  end
end
