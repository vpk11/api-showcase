# frozen_string_literal: true

module Apis
  module V1
    class UsersController < ApiController
      skip_before_action :authenticate, only: [:new, :create]

      def new
        render json: { data: {}, schema: User.schema_json }, status: :ok
      end

      def create
        user = User.new(user_params)

        if user.save
          render json: { data: user_serializer(user, root: :user, view: :with_tokens) }, status: :created
        else
          render json: { error: user.errors.messages }, status: :unprocessable_entity
        end
      end

      def show
        render json: { data: user_serializer(current_user, root: :user, view: :with_name_fields) }, status: :ok
      end

      def edit
        render json: {
                       data: user_serializer(current_user, root: :user, view: :with_name_fields),
                       schema: User.schema_json
                     },
               status: :ok
      end

      def update
        if current_user.update(update_user_params)
          render json: { data: {} }, status: :ok
        else
          render json: { error: current_user.errors.messages }, status: :unprocessable_entity
        end
      end

      private

      def user_params
        params.require(:user).permit(:user_name, :email, :first_name, :middle_name, :last_name, :password,
                                     :password_confirmation)
      end

      def update_user_params
        params.require(:user).permit(:email, :first_name, :middle_name, :last_name)
      end

      def user_serializer(*args)
        UserSerializer.render_as_json(*args)
      end
    end
  end
end
