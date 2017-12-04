class SessionsController < ApplicationController
  SECRET = ENV["JWT_SECRET"]

  def create
    user = User.find_by(email: params[:email])

    authenticated_user = user&.authenticate(params[:password])

    not_found! unless authenticated_user.present?

    payload = { user_id: user.id }
    render json: { token: JWT.encode(payload, SECRET, 'HS256') }
  end
end
