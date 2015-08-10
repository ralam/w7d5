class List < ActiveRecord::Base
  belongs_to :board

  validates :title, :board_id, :ord, presence: true
end
