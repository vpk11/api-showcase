# frozen_string_literal: true

class ProjectSerializer < Blueprinter::Base
  identifier :id

  fields :name, :description, :archived

  view :with_versions do
    association :versions, blueprint: VersionSerializer do |project, _|
      project.versions.active
    end
  end
end
