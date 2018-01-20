class AddHashToAddresses < ActiveRecord::Migration[5.0]
  def change
    add_column :addresses, :schema_hash, :string
  end
end
