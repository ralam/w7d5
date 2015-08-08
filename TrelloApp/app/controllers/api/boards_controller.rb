class Api::BoardsController < ApplicationController

  def create
    @board = Board.new(board_params)
    if @board.save
      render :show
    else
      render json: @board.errors.full_messages, status: 422
    end
  end

  def update
  end

  def index
    @boards = Board.all
    render :index
  end

  def destroy
  end

  def update
  end

  def show
    @board = Board.find(params[:id])
    if @board
      render :show
    else
      render json: @board.errors.full_messages, status: 422
    end
  end

  private

  def board_params
    params.require(:board).permit(:title)
  end

end
