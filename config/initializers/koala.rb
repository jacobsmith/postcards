# In Rails, you could put this in config/initializers/koala.rb
Koala.configure do |config|
  config.access_token = ENV['FACEBOOK_ACCESS_TOKEN'] # should be overwritten on each request when we authenticate the user
  config.app_access_token = ENV['FACEBOOK_APP_ACCESS_TOKEN'] # not sure if ever used, but it's in the docs of Koala
  config.app_id = ENV['FACEBOOK_APP_ID']
  config.app_secret = ENV['FACEBOOK_APP_SECRET']
  # See Koala::Configuration for more options, including details on how to send requests through
  # your own proxy servers.
end
