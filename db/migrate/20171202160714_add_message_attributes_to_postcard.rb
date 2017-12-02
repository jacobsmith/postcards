class AddMessageAttributesToPostcard < ActiveRecord::Migration[5.0]
  def change
    add_column :postcards, :font,      :string
    add_column :postcards, :font_size, :string
    add_column :postcards, :alignment, :string
  end
end
