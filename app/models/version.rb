# frozen_string_literal: true

# Version Model
class Version < ApplicationRecord
  belongs_to :project
  has_many :apis, dependent: :destroy

  def api_details
    apis.where(archived: false).map do |api|
      {
        api_id: api.id, api_method: api.method, api_end_point: api.end_point,
        api_description: api.description, parameters: api.params,
        headers: api.headers, bodies: api.bodies, responses: api.responses
      }
    end
  end
end
