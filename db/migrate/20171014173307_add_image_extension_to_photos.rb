class AddImageExtensionToPhotos < ActiveRecord::Migration[5.0]
  def change
    add_column :photos, :image_extension, :text
  end
end
