class CreatePostcards < ActiveRecord::Migration[5.0]
  def change
    create_table :postcards do |t|
      t.references :photo
      t.text :message
      t.string :to_address_lob_id
      t.string :from_address_lob_id

      t.timestamps
    end
  end
end
