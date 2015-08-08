Rails.application.routes.draw do
  root to: "static_pages#index"

  resources :users
  resource :session
  namespace :api, defaults: {format: 'json'} do
    resources :boards, except: [:new, :edit]
    resources :lists, only: [:create, :update, :destroy]
  end
end
