Rails.application.routes.draw do
  scope "/api" do
    resources :photos
    post '/postcards/preview', to: 'postcards#preview'
    post '/postcards/create', to: 'postcards#create'
    post '/login', to: 'sessions#create'
  end

  # used by lob to get the file to put on postcard
  get '/photos/:id/img', to: 'photos#img', as: 'photo_view'

  get '/.well-known/:id', to: 'well_known#show'
end
