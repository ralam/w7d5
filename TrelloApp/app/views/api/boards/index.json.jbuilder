json.array!(@boards) do |board|
  json.partial!(
    'api/boards/boards',
    board: board,
    display_lists: false,
    display_cards: false
  )
end
