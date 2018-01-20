class RemoveVerifiedAddressAndLobIdFromAddresses < ActiveRecord::Migration[5.0]
  def change
    remove_column :addresses, :verified_address
    remove_column :addresses, :lob_id
  end
end
