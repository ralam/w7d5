class Api::CardsController < ApplicationController

  def create
  end

  def update
  end

  def destroy
  end

  private

  def card_params
    params.require(:card).permit(:title, :list_id, :ord, :description)
  end
end
