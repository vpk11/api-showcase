# frozen_string_literal: true

module Jwt
  class Authenticator
    def self.call(headers)
      token = authenticate_header(headers)
      raise Errors::Jwt::MissingToken unless token.present?

      decoded_token = Decoder.decode!(token)
      user = authenticate_user_from_token(decoded_token)
      raise Errors::Unauthorized unless user.present?

      user
    end

    private

    def self.authenticate_header(headers)
      headers['Authorization']&.split('Bearer ')&.last
    end

    def self.authenticate_user_from_token(decoded_token)
      raise Errors::Jwt::InvalidToken unless decoded_token[:jti].present? && decoded_token[:user_id].present?

      user = User.find(decoded_token.fetch(:user_id))
      valid_issued_at = valid_issued_at?(user, decoded_token)

      return user if valid_issued_at
    end

    def self.valid_issued_at?(user, decoded_token)
      (user.token_version == decoded_token[:token_version]) &&
        (!user.token_issued_at || decoded_token[:iat] >= user.token_issued_at.to_i)
    end
  end
end
