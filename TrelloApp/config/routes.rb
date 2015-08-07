Rails.application.routes.draw do
  root to: "static_pages#index"

  resources :users
  resource :session
  namespace :api do
    resources :boards, except: [:new]
  end
end
