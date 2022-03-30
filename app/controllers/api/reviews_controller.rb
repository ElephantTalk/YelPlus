class Api::ReviewsController < ApplicationController
  def index
    @reviews = Review.where(business_id: params[:business_id])
    render :index
  end

  def create
    user = current_user

    @review = Review.new(review_params)

    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def update
    @review = Review.find(params[:id])
    user = current_user

    if @review.user_id != user.id
      render json: ["You are not the owner of this review!"], status: 422
    else
      if @review && @review.update(review_params)
        render :show
      else
        render json: @review.errors.full_messages, status: 422
      end
    end
  end

  def destroy
    if @review = Review.find(params[:id])
      business = @review.business_id
      @review.delete
      @reviews = Review.where(business_id: business)
      render :show
    end
  end

  private

  def review_params
    params.require(:review).permit(:id, :body, :score, :user_id, :business_id)
  end
end
