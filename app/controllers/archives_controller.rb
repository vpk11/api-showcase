# frozen_string_literal: true

# Archives Controller
class ArchivesController < ApplicationController
  def update
    item = request.headers['Record']
    case item
    when 'Version'
      version = Version.find(params[:id])
      version.active = false
      version.deprecated = true
      json_result(version, 'version') if version.save!
    when 'Project'
      project = Project.find(params[:id])
      project.archived = true
      json_result(project, 'project') if project.save!
    when 'Api'
      api = Api.find(params[:id])
      api.archived = true
      json_result(api, 'api') if api.save!
    else
      render json: { message: 'invalid record' }, status: 422
    end
  end

  private

  def json_result(item, name)
    case name
    when 'project'
      user = item.user
      @results = user.project_details
      render json: @results
    when 'version'
      project = item.project
      @results = project.version_details
      render json: @results
    when 'api'
      version = item.version
      @results = version.api_details
      render json: @results
    else
      render json: { message: 'some random error' }
    end
  end
end
