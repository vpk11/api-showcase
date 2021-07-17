# frozen_string_literal: true

require 'active_record'

module SchemaExtension
  def schema_json
    File.read("#{Rails.root}/app/schemas/#{self.table_name}_schema.json")
  end
end

ActiveRecord::Base.method(:extend).call(SchemaExtension)
