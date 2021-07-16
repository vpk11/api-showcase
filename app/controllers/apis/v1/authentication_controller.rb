# frozen_string_literal: true

module Apis
  module V1
    class AuthenticationController < ApiController
      skip_before_action :authenticate, only: :create

      def create
        user = User.find_by_user_name(authenticate_params[:user_name])

        raise ActiveRecord::RecordNotFound, :user_not_found unless user

        raise Errors::AuthenticateError unless user.authenticate(authenticate_params[:password])

        render json: UserSerializer.render_as_json(user, root: :user, view: :with_tokens),
               status: :created
      end

      private

      def authenticate_params
        params.require(:authentication).permit(:user_name, :password)
      end
    end
  end
end
