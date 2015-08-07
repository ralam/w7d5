class StaticPagesController < ApplicationController
  def index
    redirect_to new_session_url if !logged_in?
  end
end
