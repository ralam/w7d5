Rails.application.routes.draw do
  root to: "static_pages#index"

  resources :users
  resource :session
  namespace :api, defaults: {format: 'json'} do
    resources :boards, except: [:new, :edit]
  end
end
