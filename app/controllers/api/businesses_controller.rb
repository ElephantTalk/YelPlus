class Api::BusinessesController < ApplicationController
  def create
    @business = Business.create!(business_params)
  end

  def show
    @business = Business.with_attached_photos.find_by(id: params[:id])
  end

  # def index
  #   if params[:term]
  #     @businesses = Business.all.select { |ele|
  #       ele.name.downcase.include?(params[:term].downcase) ||
  #         ele.categories.downcase.include?(params[:term].downcase)
  #     }
  #   else
  #     @businesses = Business.all
  #   end
  #   render :index
  # end

  def index
    resp = Faraday.get("https://api.yelp.com/v3/businesses/search") do |req|
      req.headers["Authorization"] = "Bearer xiVvg73izUMSGp4GPwq5thwEmeqsJ0x07clzLPVXKqmEx0htroF0BkNzHWI2JLhbOASZNRWKeQDhQalDgnkL_rB2b6uKrY07LWcx_VHjHoTUHLOHnaKqclIpa0ceYnYx"
      req.params["term"] = params[:term]
      req.params["location"] = params[:location]
      console.log(:term)
    end
    body = JSON.parse(resp.body)
    index = body["businesses"]
    render json: index
  end

  private

  def business_params
    params.require(:business).permit(:id, :name, :url, :phone, :address1, :city, :state, :zip_code)
  end
end
