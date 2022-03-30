class CreateBusinesses < ActiveRecord::Migration[5.2]
  def change
    create_table :businesses do |t|
      t.string :name
      t.string :alias
      t.string :yelp_id
      t.string :image_url
      t.string :url
      t.string :display_phone
      t.string :phone
      t.string :price
      t.integer :rating
      t.integer :review_count
      t.string :address1
      t.string :address2
      t.string :address3
      t.string :city
      t.string :zip_code
      t.float :latitude
      t.float :longitude

      t.timestamps
    end
  end
end
