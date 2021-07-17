# frozen_string_literal: true

class VersionSerializer < Blueprinter::Base
  identifier :id

  fields :name, :deprecated, :active
end
