class SessionController < ApplicationController
  def new
  end

  def create
    user = User.find_by_credentials(params[:user])
    if user
      login!(user)
      redirect_to '/'
    else
      redirect_to new_session_url
    end
  end

  def destroy
    logout!
    redirect_to new_session_url
  end

end
