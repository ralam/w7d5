TrelloApp.Routers.Router = Backbone.Router.extend({
  initialize: function (boards, $rootEl) {
    this.boards = boards;
    this.$rootEl = $rootEl;
  },

  routes:{
    '': 'index'
  },

  index: function () {
    this.boards.fetch();
    var view = new TrelloApp.Views.BoardIndex({collection: this.boards})
    this.swapView(view);
  },

  swapView: function (view) {
    this.view && this.view.remove();
    this.view = view;
    this.$rootEl.html(view.render().$el);
  }
});
