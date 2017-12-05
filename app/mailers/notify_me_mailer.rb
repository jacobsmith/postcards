class NotifyMeMailer < ApplicationMailer
  def oh_shit(postcard_id:, errors:, current_user:)
    mail(
      to: 'jacob.wesley.smith@gmail.com',
      subject: 'ruh-roh-raggy',
      layout: false,
      body: "postcard_id: #{postcard_id} \n\n #{errors} \n\n #{current_user.inspect}"
    )
  end
end
