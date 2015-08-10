class Api::BoardsController < ApplicationController

  def create
    @board = Board.new(board_params)
    @board.user_id = current_user.id
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
    @board = Board.find(params[:id])
    @board.destroy
    render :index
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
