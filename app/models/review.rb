# == Schema Information
#
# Table name: reviews
#
#  id                  :bigint           not null, primary key
#  review_id           :string
#  review_rating       :integer
#  review_text         :text
#  review_time_created :datetime
#  review_url          :string
#  user_id             :string
#  user_profile_url    :string
#  user_image_url      :string
#  user_name           :string
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#
class Review < ApplicationRecord
  validates :business_id, :user_id, :body, :score, presence: true

  belongs_to :user,
             foreign_key: :user_id,
             class_name: :User

  belongs_to :restaurant,
             foreign_key: :business_id,
             class_name: :Business
end
