# frozen_string_literal: true

module Apis
  module V1
    class ProjectsController < ApiController
      before_action :load_project, only: [:show, :edit, :update, :destroy]

      def index
        projects = current_user.projects.active

        render json: { data: project_serializer(projects, root: :projects, view: :with_versions) }, status: :ok
      end

      def new
        render json: { data: {}, schema: Project.schema_json }, status: :ok
      end

      def create
        project = current_user.projects.build(project_params.merge(account_id: current_user.account_id))

        if project.save
          render json: { data: {} }, status: :created
        else
          render json: { error: project.errors.messages }, status: :unprocessable_entity
        end
      end

      def show
        render json: { data: project_serializer(@project, root: :project, view: :with_versions) }, status: :ok
      end

      def edit
        render json: { data: project_serializer(@project, root: :project), schema: Project.schema_json },
               status: :ok
      end

      def update
        if @project.update(project_params)
          render json: { data: {} }, status: :ok
        else
          render json: { error: @project.errors.messages }, status: :unprocessable_entity
        end
      end

      def destroy
        if @project.destroy
          render json: { data: {} }, status: :ok
        else
          render json: { error: :couldnt_delete_record }, status: :unprocessable_entity
        end
      end

      private

      def project_params
        params.require(:projects).permit(:name, :description)
      end

      def load_project
        @project = Project.active.find(params[:id])
      end

      def project_serializer(*args)
        ProjectSerializer.render_as_json(*args)
      end
    end
  end
end
