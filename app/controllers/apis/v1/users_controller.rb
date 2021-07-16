# frozen_string_literal: true

module Apis
  module V1
    class UsersController < ApiController
      skip_before_action :authenticate, only: :create

      def create
        user = User.new(user_params)

        if user.save
          render json: UserSerializer.render_as_json(user, root: :user, view: :with_tokens),
                 status: :created
        else
          render json: { error: user.errors.messages }, status: :unprocessable_entity
        end
      end

      def index
        render json: UserSerializer.render_as_json(User.all, root: :users), status: :ok
      end

      private

      def user_params
        params.require(:user).permit(:name, :user_name, :email, :first_name, :middle_name, :last_name, :password)
      end
    end
  end
end
