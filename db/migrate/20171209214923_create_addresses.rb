class CreateAddresses < ActiveRecord::Migration[5.0]
  def change
    create_table :addresses do |t|
      t.jsonb  :address
      t.jsonb  :verified_address
      t.string :lob_id
      t.boolean :default_from_address, default: false

      t.references :user, foreign_key: true
    end
  end
end
