@reviews.each do |review|
  json.set! review.id do
    json.extract! review, :id, :body, :user_id, :business_id, :score, :created_at
  end
end
