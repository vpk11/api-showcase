# frozen_string_literal: true

# Session Controller
class SessionsController < ApplicationController
  skip_before_action :authorized, only: %i[new create welcome]

  # Render Login Form
  def new
    redirect_to projects_path if logged_in?
  end

  # Login Happens Here
  def create
    @user = User.find_by(email: params[:email])
    if @user&.authenticate(params[:password])
      login_user
    else
      @error = (@user ? t('wrong_password_error') : t('user_doesnt_exist_error'))
      render :new
    end
  end

  def logout
    logout_user
  end

  def welcome
    redirect_to projects_path if logged_in?
  end
end
