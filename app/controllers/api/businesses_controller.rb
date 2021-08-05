class Api::BusinessesController < ApplicationController
  def create
    @business = Business.create!(business_params)
  end

  def index
    @businesses = Business.all
  end

  def show
    @business = Business.find(params[:id])
    if @business
      render :show
    else
    end
  end

  private

  def business_params
    params.require(:restaurant).permit(:id, :name, :url, :phone, :address1, :city, :state, :zip_code)
  end
end
