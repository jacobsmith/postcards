class AddTimestampsToAddresses < ActiveRecord::Migration[5.0]
  def change
    add_column :addresses, :created_at, :datetime, null: false
    add_column :addresses, :updated_at, :datetime, null: false
  end
end
