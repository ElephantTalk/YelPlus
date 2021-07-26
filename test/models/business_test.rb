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
#
require 'test_helper'

class BusinessTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
