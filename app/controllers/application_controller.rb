class ApplicationController < ActionController::API
  before_action :set_current_user

  def not_found!
    return render status: :not_found
  end

  def unauthorized!
    return render stauts: :unauthorized
  end

  private

  def set_current_user
    auth = request.headers["Authorization"]
    token = (auth&.split(" ") || []).last

    return unless token.present?

    decoded_token = JWT.decode(token, SessionsController::SECRET, true, { :algorithm => 'HS256' }) || {}
    payload = decoded_token&.first

    user = User.find_by(id: payload["user_id"])
    unauthorized! unless user.revocable_session_token == payload["revocable_session_token"]

    @current_user = user
  end
end
