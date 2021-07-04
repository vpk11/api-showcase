# frozen_string_literal: true

Rails.application.routes.draw do
  get '/', to: 'sessions#welcome'
  get 'login', to: 'sessions#new'
  post 'login', to: 'sessions#create'
  get 'logout', to: 'sessions#logout'
  get 'welcome', to: 'sessions#welcome'
  get 'authorized', to: 'sessions#page_requires_login'
  get 'signup', to: 'users#new'
  post 'signup', to: 'users#create'
  patch 'apis/:id/archive', to: 'apis#archive'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  patch 'archives/:id', to: 'archives#update'

  resources :versions
  resources :projects
  resources :apis, only: %i[show destroy edit update]
  resources :headers
  resources :params
  resources :bodies
  resources :responses
  resources :versions do
    resources :apis, only: %i[index new create show edit update]
  end
end
