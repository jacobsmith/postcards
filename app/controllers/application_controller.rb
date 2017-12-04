class ApplicationController < ActionController::API
  before_action :set_current_user

  def not_found!
    return render status: :not_found
  end

  private

  def set_current_user
    auth = request.headers["Authorization"]
    token = (auth&.split(" ") || []).last

    return unless token.present?

    decoded_token = JWT.decode(token, SessionsController::SECRET, true, { :algorithm => 'HS256' }) || {}
    payload = decoded_token&.first

    @current_user = User.find_by(id: payload["user_id"])
  end
end
