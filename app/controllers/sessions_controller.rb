class SessionsController < ApplicationController
  def create
    facebook_api = Koala::Facebook::API.new(params['facebookUserAccessToken'])

    facebook_user = facebook_api.get_object('me', fields: "id,name,email")

    render json: { error: "no user with that id" } and return unless facebook_user["id"].present?

    user = User.find_by(facebook_user_id: facebook_user["id"])

    unless user.present?
      user = User.create(facebook_user_id: facebook_user["id"], name: facebook_user["name"], email: facebook_user["email"])
    end

    session["current_user_id"] = user.id
    render json: { user: user }
  end
end
