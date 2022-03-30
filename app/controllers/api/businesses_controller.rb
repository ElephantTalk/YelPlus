class Api::BusinessesController < ApplicationController
  def create
    @business = Business.create!(business_params)
  end

  def show
    @business = Business.with_attached_photos.find_by(id: params[:id])
  end

  def index
    if params[:term]
      @businesses = Business.all.select { |ele|
        ele.name.downcase.include?(params[:term].downcase) ||
          ele.categories.downcase.include?(params[:term].downcase)
      }
    else
      @businesses = Business.all
    end
    render :index
  end

  def search
    businesses = Faraday.get("https://api.yelp.com/v3/businesses/search") do |req|
      req.headers["Authorization"] = "Bearer #{ENV["YELP_API_KEY"]}"
      req.params["term"] = params[:term]
      req.params["location"] = params[:location]
    end
    search_results = JSON.parse(businesses.body)
    render json: search_results
  end

  private

  def business_params
    params.require(:business).permit(:id, :name, :url, :phone, :address1, :city, :state, :zip_code)
  end
end
