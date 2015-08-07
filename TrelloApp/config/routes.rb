Rails.application.routes.draw do
  resources :users
  resource :session
  namespace :api do
    resources :boards, except: [:new]
  end
end
