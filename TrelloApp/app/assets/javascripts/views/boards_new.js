TrelloApp.Views.BoardNew = Backbone.View.extend({

  template: JST['boards/new'],

  render: function () {
    this.$el.html(this.template);
    return this;
  }

});
