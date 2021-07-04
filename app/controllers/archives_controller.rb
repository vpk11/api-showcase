# frozen_string_literal: true

# Archives Controller
class ArchivesController < ApplicationController
  def update
    item = request.headers['record']
    
    if updatable_records.include? item
      archive_and_build_json(item)
    else
      render_json(:unprocessable_entity, t('invalid_record'))
    end
  end

  private

  def archive_and_build_json(item)
    item_record = item.constantize.find(params[:id])
    json_result(item_record) if item_record.archive_record
  end

  def json_result(item_record)
    results = build_result(item_record)

    render json: results, status: :ok
  end

  def updatable_records
    %w[Version Project Api]
  end

  def build_result(item_record)
    case item_record.class.name
    when 'Project'
      user = item_record.user
      user.project_details
    when 'Version'
      project = item_record.project
      project.version_details
    when 'Api'
      version = item_record.version
      version.api_details
    end
  end
end
