TrelloApp.Views.BoardIndex = Backbone.CompositeView.extend({
  template: JST["boards/index"],

  initialize: function () {
    this.collection.each(this.addBoard.bind(this));
    this.listenTo(this.collection, "add", this.addBoard);
  },
  //
  // tagName: "ul",
  // className: ".board",

  addBoard: function (board) {
    var boardView = new TrelloApp.Views.BoardListItem({
      model: board
    });
    this.addSubview("ul.board", boardView);
  },

  render: function () {
    this.$el.html(this.template);
    this.attachSubviews();
    return this;
  }
});
