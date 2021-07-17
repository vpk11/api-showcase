# frozen_string_literal: true

class UserSerializer < Blueprinter::Base
  identifier :id

  fields :user_name, :email, :full_name, :admin

  view :with_tokens do
    field :tokens do |user, _|
      Jwt::Issuer.call(user)
    end
  end

  view :with_name_fields do
    fields :first_name, :middle_name, :last_name
  end
end
