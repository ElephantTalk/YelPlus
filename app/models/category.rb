class Category < ApplicationRecord
  validates :category, presence: true

  has_many :business_joins,
           foreign_key: :category_id,
           class_name: :Category_join

  has_many :businesses,
           through: :business_joins,
           source: :business
end
