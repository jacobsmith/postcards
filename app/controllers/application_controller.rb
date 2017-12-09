class ApplicationController < ActionController::API
  attr_reader :current_user
  before_action :set_current_user

  def not_found!
    return render json: {}, status: :not_found
  end

  def unauthorized!
    return render json: {}, stauts: :unauthorized
  end

  private

  def set_current_user
    auth = request.headers["Authorization"]
    token = (auth&.split(" ") || []).last

    return unless token.present?

    decoded_token = JWT.decode(token, SessionsController::SECRET, true, { :algorithm => 'HS256' }) || {}
    payload = decoded_token&.first

    user = User.find_by(id: payload["user_id"])
    if user.revocable_session_token == payload["revocable_session_token"]
      # only set current user if the tokens match - otherwise, it could be a guest user
      @current_user = user
    end

  rescue JWT::DecodeError
    @current_user = nil # user is a guest, presumably
  end
end
