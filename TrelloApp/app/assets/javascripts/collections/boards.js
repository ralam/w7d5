TrelloApp.Collections.Boards = Backbone.Collection.extend({
  url: 'api/boards',

  model: TrelloApp.Model.Board,

});
