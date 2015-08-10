TrelloApp.Views.BoardIndex = Backbone.CompositeView.extend({
  template: JST["boards/index"],

  initialize: function () {
    this.collection.each(this.addBoard.bind(this));
    this.listenTo(this.collection, "add", this.addBoard);
    this.listenTo(this.collection, "remove", this.removeBoardView);
    this.listenTo(this.collection, "sync", this.render);
  },

  addBoard: function (board) {
    var boardView = new TrelloApp.Views.BoardListItem({
      model: board
    });
    this.addSubview("ul.board", boardView);
  },

  removeBoardView: function (board) {
    this.removeModelSubview('ul.board', board);
  },

  render: function () {
    this.$el.html(this.template);
    this.attachSubviews();
    return this;
  }
});
