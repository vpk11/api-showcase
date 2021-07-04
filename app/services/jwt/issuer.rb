module Jwt
  class Issuer
    def self.call(user)
      user.upgarade_token_version

      access_token, jti, exp = Encoder.call(user, 'access_token')
      refresh_token = Encoder.call(user, 'refresh_token')

      [access_token, refresh_token]
    end
  end
end