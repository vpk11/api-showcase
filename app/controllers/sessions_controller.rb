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
      session[:user_id] = @user.id
      redirect_to projects_path
    else
      @error = if @user
                 'Wrong Password'
               else
                 "User doesn't exist. Try SignUp!"
               end
      render :new
    end
  end

  def login; end

  def welcome; end
end
