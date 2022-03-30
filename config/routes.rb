Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "static_pages#root"
  post "/search", to: "yelp#search"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :businesses, only: [:create, :show, :index] do
      resources :reviews, only: [:create, :index, :update, :destroy]
    end
  end
end
