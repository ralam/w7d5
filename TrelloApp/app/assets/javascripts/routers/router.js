TrelloApp.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.boards = options.collection;
    this.$rootEl = options.$rootEl
  },

  routes:{
    '': 'index'
  },

  index: function () {
    this.boards.fetch();
    var view = new TrelloApp.Views.BoardIndex({collection: this.boards});
    this.swapView(view);
  },

  swapView: function (view) {
    this.view && this.view.remove();
    this.view = view;
    this.$rootEl.html(view.render().$el);
  }
});
