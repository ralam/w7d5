class User < ActiveRecord::Base

  validates :email, :password_digest, :session_token, presence: true

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.find_by_credentials(params)
    user = User.find_by(email: params[:email])
    (user && user.is_password?(params[:password])) ? user : nil
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

end
