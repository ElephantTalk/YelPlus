
# class YelpController < ApplicationController
#     def search
#       res = Faraday.get("https://api.yelp.com/v3/businesses/search") do |req|
#         req.headers['Authorization'] = "Bearer #{ENV['YELP_API_KEY']}"
#         req.params['term'] = params[:term]
#         req.params['location'] = params[:location]
#       end
#       search_results = JSON.parse(res.body)
#       render json: search_results
#     end
# end