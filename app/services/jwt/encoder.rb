# frozen_string_literal: true

module Jwt
  class Encoder
    def self.call(user, token_type)
      method("issue_#{token_type}").call(user)
    end

    private

    def self.issue_access_token(user)
      jti = SecureRandom.hex
      exp = access_token_expiry
      access_token = JWT.encode(
        {
          user_id: user.id,
          token_version: user.token_version,
          jti:,
          iat: token_issued_at.to_i,
          exp:
        },
        Secret.access_secret
      )

      [access_token, jti, exp]
    end

    def self.issue_refresh_token(user)
      JWT.encode(
        {
          user_id: user.id,
          token_version: user.token_version,
          jti: SecureRandom.hex,
          iat: token_issued_at.to_i,
          exp: refresh_token_expiry
        },
        Secret.refresh_secret
      )
    end

    def self.access_token_expiry
      (token_issued_at + Expiry.access_expiry).to_i
    end

    def self.refresh_token_expiry
      (token_issued_at + Expiry.refresh_expiry).to_i
    end

    def self.token_issued_at
      Time.current
    end
  end
end
