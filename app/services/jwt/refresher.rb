# frozen_string_literal: true

module Jwt
  class Refresher
    def self.refresh!(refresh_token, user)
      raise Errors::Jwt::MissingToken, token: 'refresh' unless refresh_token.present?

      new_access_token, new_refresh_token = Jwt::Issuer.call(user)

      [new_access_token, new_refresh_token]
    end
  end
end
