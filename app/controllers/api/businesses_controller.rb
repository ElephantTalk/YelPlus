class Api::BusinessesController < ApplicationController
    def create
        @business = Business.create!(business_params)
    end

    def index
        @businesses = Business.all
    end

    def search 
        split_search = params[:search].split("_")
        search1 = split_search[0]
        search2 = split_search[1]
        @businesses = []
      
        if  search1 != "" && search2 != nil
            @businesses = Business.where(["lower(name) LIKE ?", "%#{search1.downcase}%"]).where(["lower(address) LIKE ?", "%#{search2.downcase}%"])  
        elsif search1 != "" && search1 != nil 
            @businesses = Business.where(["lower(name) LIKE ?", "%#{search1.downcase}%"])
        end
        if search1 != "" && @businesses.length == 0 && search1 != nil 
            lower = search1.downcase.capitalize
            x = Tag.find_by(["tag LIKE ?", "%#{lower}%"])
            
            if x && search2 != nil
                @businesses = x.businesses.where(["lower(address) LIKE ?", "%#{search2.downcase}%"])
            elsif x
                @businesses = x.businesses
            end
        end
        if search2 != nil && @businesses.length == 0
            @businesses = Business.where(["lower(address) LIKE ?", "%#{search2.downcase}%"])
        end   
        
        if search1 == "shrewbitz"
            @businesses = Business.all
        end
        
        render :index
    end

    def show
        @business = Business.find(params[:id])
        if @business
            render :show
        else
            
        end
    end


    def business_params
        params.require(:restaurant).permit(:id, :name, :url, :phone, :address1, :city, :state, :zip_code)
    end


end
