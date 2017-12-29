class UsersController < ApplicationController
  skip_before_action :set_current_user, only: [:create]

  def me
    render json: current_user || {}
  end

  def credits
    token = params[:stripeToken]

    charge = $Stripe::Charge.create(
      :amount => 1499,
      :currency => "usd",
      :description => "Postcard Credits",
      :source => token["id"],
      metadata: { user_id: current_user.id }
    )

    if charge[:outcome][:type] == "authorized"
      current_user.credits += 10
      current_user.save
      render json: { success: true }
    else
      Rails.logger.info(charge.inspect)
      render json: { success: false }
    end

  end

  def index
    return unauthorized! unless current_user.email == 'jacob.wesley.smith@gmail.com'

    render json: User.all
  end

  def give_credit
    return unauthorized! unless current_user.email == 'jacob.wesley.smith@gmail.com'

    user = User.find(params[:id])
    user.update!(credits: user.credits + Integer(params['credits'])) if user.present?

    render json: user.reload
  end

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
