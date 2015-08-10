json.extract!(
  board,
  :title,
  :id
)

if display_lists
  json.lists do
    json.array!(board.lists) do |list|
      json.partial! 'api/lists/lists', list: list
    end
  end
end
