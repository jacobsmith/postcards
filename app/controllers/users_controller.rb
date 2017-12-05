class UsersController < ApplicationController
  skip_before_action :set_current_user, only: [:create]

  def create
    session_token = SecureRandom.uuid

    user = User.new(
      email: params[:email],
      password: params[:password],
      password_confirmation: params[:passwordConfirmation],
      revocable_session_token: session_token
    )

    if user.save
      payload = { user_id: user.id, revocable_session_token: session_token }
      render json: { token: JWT.encode(payload, SessionsController::SECRET, 'HS256') }
    else
      render json: { errors: user.errors.full_messages.to_sentence }
    end
  end
end
