module Jwt
  class Expiry
    def self.access_expiry
      2.hours
    end

    def self.refresh_expiry
      7.days
    end
  end
end