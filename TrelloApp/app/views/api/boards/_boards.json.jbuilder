json.extract!(
  board,
  :title,
  :id
)

if display_lists
  json.lists do
    json.array!(board.lists) do |list|
      json.partial! 'api/lists/lists', list: list
      if display_cards
        json.cards do
          json.array!(list.cards) do |card|
            json.partial! 'api/cards/cards', card: card
          end
        end
      end
    end
  end
end
