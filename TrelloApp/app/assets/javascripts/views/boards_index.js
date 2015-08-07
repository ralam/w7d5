TrelloApp.Views.BoardIndex = Backbone.View.extend({
  template: JST["boards/index"],

  initialize: function () {
    this.listenTo(this.collection, "sync", this.render)
  },

  tagName: "ul",

  render: function () {
    this.$el.html(this.template);
    this.collection.each(function(board) {
      var boardItem = new TrelloApp.Views.BoardListItem({model: board});
      this.$el.append(boardItem.render().$el);
    }.bind(this));
    return this;
  }
});
