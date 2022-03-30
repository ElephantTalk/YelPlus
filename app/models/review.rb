class Review < ApplicationRecord
  validates :body, :user_id, :business_id, presence: true
  validates :score, presence: true, inclusion: { in: [1, 2, 3, 4, 5] }

  belongs_to :user,
             primary_key: :id,
             foreign_key: :user_id,
             class_name: :User

  belongs_to :business,
             primary_key: :id,
             foreign_key: :business_id,
             class_name: :Business
end
