class List < ActiveRecord::Base
  belongs_to :board
  has_many :cards

  validates :title, :board_id, :ord, presence: true
end
