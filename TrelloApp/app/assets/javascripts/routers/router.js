TrelloApp.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.boards = options.collection;
    this.$rootEl = options.$rootEl;
  },

  routes:{
    '': 'index',
    'boards/new': 'createBoard',
    'boards/:id/lists/new': 'createList',
    'boards/:id': 'showBoard'
  },

  index: function () {
    this.boards.fetch();
    var view = new TrelloApp.Views.BoardIndex({
      collection: this.boards
    });
    this.swapView(view);
  },

  createBoard: function () {
    var view = new TrelloApp.Views.BoardNew({
      collection: this.boards
    });
    this.swapView(view);
  },

  showBoard: function (id) {
    var board = this.boards.getOrFetch(id);
    var view = new TrelloApp.Views.BoardShow({
      model: board,
      collection: this.boards
    });
    this.swapView(view);
  },

  createList: function (id) {
    var board = this.boards.getOrFetch(id);
    var lists = board.lists();
    var view = new TrelloApp.Views.ListNew({
      collection: lists,
      board: board
    });
    this.swapView(view);
  },

  swapView: function (view) {
    this.view && this.view.remove();
    this.view = view;
    this.$rootEl.html(view.render().$el);
  }
});
