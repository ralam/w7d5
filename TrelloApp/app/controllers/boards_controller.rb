class BoardsController < ApplicationController

  def create
  end

  def update
  end

  def index
  end

  def destroy
  end

  def update
  end

  private

  def board_params
    params.require(:board).permit(:title)
  end

end
