# == Schema Information
#
# Table name: businesses
#
#  id            :bigint           not null, primary key
#  name          :string
#  alias         :string
#  yelp_id       :string
#  image_url     :string
#  url           :string
#  display_phone :string
#  phone         :string
#  price         :string
#  rating        :integer
#  review_count  :integer
#  address1      :string
#  address2      :string
#  address3      :string
#  city          :string
#  zip_code      :string
#  latitude      :float
#  longitude     :float
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  owner_id      :string
#  state         :string
#
class Business < ApplicationRecord
  validates :name, :url, :phone, :address1, :city, :state, :zip_code, presence: true

  belongs_to :user,
             foreign_key: :owner_id,
             class_name: :User

  has_many :tag_joins,
           foreign_key: :restaurant_id,
           class_name: :Tag_join

  has_many :review_joins,
           foreign_key: :restaurant_id,
           class_name: :Review

  has_many :reviews,
           through: :review_joins,
           source: :user

  has_many :tags,
           through: :tag_joins,
           source: :tag

  has_many_attached :photos
end
