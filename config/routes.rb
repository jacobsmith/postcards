Rails.application.routes.draw do
  scope "/api" do
    resources :photos
    post '/postcards/preview', to: 'postcards#preview'
    post '/postcards/create', to: 'postcards#create'
  end

  get '/photos/:id/img', to: 'photos#img', as: 'photo_view'
end
