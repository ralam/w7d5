class UserController < ApplicationController
  def create
    user = User.new(user_params)
    if user.save
      login!(user)
      render 'root'
    else
      render :new
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password_digest, :session_token)
  end
end
