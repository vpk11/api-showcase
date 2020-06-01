# frozen_string_literal: true

Rails.application.routes.draw do
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
