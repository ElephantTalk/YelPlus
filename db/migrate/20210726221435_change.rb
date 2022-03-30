class Change < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :profile_url, :string
    add_column :users, :image_url, :string
  end
end
