# frozen_string_literal: true

# Session Controller
class SessionsController < ApplicationController
  skip_before_action :authorized, only: %i[new create welcome]

  def new; end

  def create
    @user = User.find_by(email: params[:email])
    if @user&.authenticate(params[:password])
      sessions[:user_id] = @user.id
      redirect_to '/welcome'
    else
      redirect_to '/login'
    end
  end

  def login; end

  def welcome; end
end
