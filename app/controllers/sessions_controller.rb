class SessionsController < ApplicationController
  SECRET = ENV["JWT_SECRET"]

  def create
    user = User.find_by(email: params[:email])

    authenticated_user = user&.authenticate(params[:password])

    not_found! unless authenticated_user.present?

    session_token = SecureRandom.uuid
    user.update!(revocable_session_token: session_token)

    payload = { user_id: user.id, revocable_session_token: session_token }
    render json: { token: JWT.encode(payload, SECRET, 'HS256') }
  end

  def destroy
    @curret_user.update!(revocable_session_token: SecureRandom.uuid)

    render json: { success: true }
  end
end
