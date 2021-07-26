class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string :review_id
      t.integer :review_rating
      t.text :review_text
      t.timestamp :review_time_created
      t.string :review_url
      t.string :user_id
      t.string :user_profile_url
      t.string :user_image_url
      t.string :user_name

      t.timestamps null: false
    end
  end
end
