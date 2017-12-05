class AddRevocableSessionTokenToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :revocable_session_token, :uuid
  end
end
