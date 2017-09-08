Rails.application.routes.draw do
	
  scope '/api' do
    resources :users, only: [:index, :show, :create, :update]
    resources :items, only: [:index]
    resources :ingredients, only: [:index]
    resources :boxes, only: [:index, :show, :create, :update]
  end

  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
  	!request.xhr? && request.format.html?
	end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
