@businesses.each do |business|
  json.set! business.id do
    json.partial! "business", business: business
    if business.photos.attached?
      json.photos business.photos.map { |photo| url_for(photo) }
    end
  end
end
