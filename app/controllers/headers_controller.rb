# frozen_string_literal: true

# Headers Controller
class HeadersController < ApplicationController
  def create
    header = Header.new(
      key: params[:key],
      value_object: params[:value_object],
      api_id: params[:api_id],
      description: params[:description]
    )
    if header.save
      render json: header
    else

    end
  end
end
