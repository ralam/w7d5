class Card < ActiveRecord::Base
  belongs_to :list

  validates :title, :list_id, :ord, :description, presence: true
end
