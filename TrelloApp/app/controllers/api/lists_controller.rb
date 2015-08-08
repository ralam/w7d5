class Api::BoardsController < ApplicationController

  def create
    @list = List.new(list_params)
    @list.board_id = params[:board_id]
    if list.save
      render :show
    else
      render json: @list.errors.full_messages, status: 422
    end
  end

  def update
    @list = List.find(params[:id])
    if @list.update(list_params)
      render :show
    else
      render json: @list.errors.full_messages, status: 422
    end
  end

  def destroy
    @list = List.find(params[:id])
    @list.destroy
    render :show
  end

  private

  def list_params
    params.require(:list).permit(:board_id, :title, :ord)
  end
end
