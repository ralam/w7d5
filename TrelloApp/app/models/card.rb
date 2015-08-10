class Card < ActiveRecord::Base
  belongs_to: lists

  validates :title, :list_id, :ord, :description, presence: true
end
