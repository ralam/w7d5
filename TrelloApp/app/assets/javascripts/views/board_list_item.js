TrelloApp.Views.BoardListItem = Backbone.View.extend({
  template: JST['boards/list_item'],

  initialize: function (options) {
    this.model = options.model;
  },

  tagName: 'li',

  render: function () {
    this.$el.html(this.template({board: this.model}));
    return this;
  }
});
