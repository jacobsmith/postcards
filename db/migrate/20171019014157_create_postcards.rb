class CreatePostcards < ActiveRecord::Migration[5.0]
  def change
    create_table :postcards do |t|
      t.references :photo
      t.text :message
      t.text :to_address
      t.text :from_address

      t.timestamps
    end
  end
end
