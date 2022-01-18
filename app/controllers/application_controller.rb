# frozen_string_literal: true

# Application Controller
class ApplicationController < ActionController::Base
  before_action :authorized
  helper_method :current_user
  helper_method :logged_in?

  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  def current_user
    User.find_by(id: session[:user_id])
  end

  def logged_in?
    current_user.present?
  end

  def authorized
    redirect_to '/welcome' unless logged_in?
  end

  private

  def login_user
    session[:user_id] = @user.id
    redirect_to root_path
  end

  def logout_user
    session[:user_id] = nil
    redirect_to '/welcome'
  end

  def render_not_found_response(exception)
    render json: { success: false, error: exception.message }, status: :not_found
  end

  def render_json(status, message)
    render json: { message: }, status:
  end
end
