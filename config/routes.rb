# frozen_string_literal: true

Rails.application.routes.draw do
  get '/', to: 'sessions#welcome'
  get 'login', to: 'sessions#new'
  post 'login', to: 'sessions#create'
  get 'welcome', to: 'sessions#welcome'
  get 'authorized', to: 'sessions#page_requires_login'
  get 'signup', to: 'users#new'
  post 'signup', to: 'users#create'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  patch 'archives', to: 'archives#update'
  
  resources :versions
  resources :projects
  resources :apis
  resources :headers
  resources :params
  resources :bodies
  resources :responses
end
