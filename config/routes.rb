Rails.application.routes.draw do
  scope "/api" do
    resources :photos
    post '/postcards/preview', to: 'postcards#preview'
    post '/postcards/create', to: 'postcards#create'

    resources :sessions, only: [:create]
    delete '/sessions', to: 'sessions#destroy'

    resources :users, only: [:create]
    get '/me', to: 'users#me'
  end

  scope "/admin" do
    resources :users
    post '/users/:id/:credit', to: "users#give_credit"
  end

  # used by lob to get the file to put on postcard
  get '/photos/:id/img', to: 'photos#img', as: 'photo_view'

  get '/.well-known/:id', to: 'well_known#show'
end
