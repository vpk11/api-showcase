# frozen_string_literal: true

module Errors
  module Jwt
    class MissingToken < StandardError
    end

    class InvalidToken < StandardError
    end
  end

  class Unauthorized < StandardError
  end
end
