TrelloApp.Collections.Boards = Backbone.Collection.extend({
  url: 'api/boards',

  model: TrelloApp.Models.Board,

  getOrFetch: function (id) {
    var board = this.get(id);
    var collection = this;
    if (board) {
      board.fetch();
    } else {
      board = new TrelloApp.Models.Board({id: id});
      collection.add(board);
      board.fetch({
        error: function () { collection.remove(board); }
      });
    }
    board.fetch();
    return board;
  }
});
