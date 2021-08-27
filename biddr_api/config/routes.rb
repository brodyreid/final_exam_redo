Rails.application.routes.draw do
    get("/", {to:"auctions#home", as: "root"})

    resources :auctions do
        resources :bids, only: [:create, :destroy], shallow: true
    end

    resources :users, only: [:new, :create, :show]
    resource :session, only: [:new, :create, :destroy]
  
    namespace :api, defaults: {format: :json} do
        namespace :v1 do
            resources :auctions
            resource :session, only: [:create, :destroy]
            resources :users, only: [:create] do
                get :current, on: :collection
            end
  
        end
    end
end
