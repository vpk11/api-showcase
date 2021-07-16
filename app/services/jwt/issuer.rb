# frozen_string_literal: true

module Jwt
  class Issuer
    def self.call(user)
      user.upgrade_token_version

      access_token, _jti, _exp = Encoder.call(user, 'access_token')
      refresh_token = Encoder.call(user, 'refresh_token')

      [access_token, refresh_token]
    end
  end
end
