# frozen_string_literal: true

# Apis Controller
class ApisController < ApplicationController
  def new
    @version = Version.first
    @methods = Api::METHODS
  end

  def create

  end
end
