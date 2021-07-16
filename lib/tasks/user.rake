# frozen_string_literal: true

namespace :user do
  task create: :environment do
    puts "======================Started at: #{Time.now}==========================\n"
    puts "======================Creating admin user==========================\n"
    account = Account.create(name: 'admin', archived: false)
    user = User.create(
      name: 'admin',
      email: 'admin@example.com',
      admin: true,
      account_id: account.id,
      archived: false,
      password: 'admin123'
    )
    puts "\n======================Created User: #{user.name}==========================\n"
    puts "======================Finished at: #{Time.now}=========================="
  end
end
