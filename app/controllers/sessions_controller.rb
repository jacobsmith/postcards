class SessionsController < ApplicationController
  SECRET = ENV["JWT_SECRET"]

  def create
    user = User.find_by(email: params[:email])

    authenticated_user = user&.authenticate(params[:password])

    not_found! unless authenticated_user.present?

    session_token = SecureRandom.uuid
    user.update!(revocable_session_token: session_token)

    payload = { user_id: user.id, revocable_session_token: session_token }
    render json: {
      token: JWT.encode(payload, SECRET, 'HS256'),
      credits: user.credits
     }
  end

  def destroy
    # don't throw error if we can't find the current user (their token is already invalid)
    current_user.try(:update, revocable_session_token: SecureRandom.uuid)

    render json: { success: true }
  end
end
