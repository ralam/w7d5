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
    this._swapView(view);
  },
  


});
