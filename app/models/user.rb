# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  first_name      :string           not null
#  last_name       :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  profile_url     :string
#  image_url       :string
#
class User < ApplicationRecord
  validates :email, :session_token, presence: true, uniqueness: true
  validates :first_name, :last_name, :password_digest, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  after_initialize :ensure_session_token
  attr_reader :password

  has_many :businesses,
           foreign_key: :owner_id,
           class_name: :Business

  has_many :reviews,
           through: :review_joins,
           source: :business

  has_many :review_joins,
           foreign_key: :user_id,
           class_name: :Review

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)

    return nil if user.nil?
    user.is_password?(password) ? user : nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    generate_unique_session_token
    self.save
    self.session_token
  end

  private

  def ensure_session_token
    generate_unique_session_token unless self.session_token
  end

  def generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def generate_unique_session_token
    self.session_token = generate_session_token
    while User.find_by(session_token: self.session_token)
      self.session_token = generate_session_token
    end
    self.session_token
  end
end
