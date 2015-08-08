TrelloApp.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.boards = options.collection;
    this.$rootEl = options.$rootEl;
  },

  routes:{
    '': 'index',
    'boards/new': 'createBoard',
    'boards/:id/show': 'showBoard'
  },

  index: function () {
    this.boards.fetch();
    var view = new TrelloApp.Views.BoardIndex({collection: this.boards});
    this.swapView(view);
  },

  createBoard: function () {
    var view = new TrelloApp.Views.BoardNew({collection: this.boards});
    this.swapView(view);
  },

  showBoard: function (id) {
    var board = this.boards.getOrFetch(id);
    var boardView = new TrelloApp.Views.BoardShow({model: board});
    this.swapView(boardView);
  },

  swapView: function (view) {
    this.view && this.view.remove();
    this.view = view;
    this.$rootEl.html(view.render().$el);
  }
});
