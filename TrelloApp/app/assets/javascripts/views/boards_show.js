TrelloApp.Views.BoardShow = Backbone.View.extend({

  template: JST['board/show'],

  render: function () {
    this.$el.html(this.template({board: this.model}));
    return this;
  }

});
