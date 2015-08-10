TrelloApp.Views.ListShow = Backbone.CompositeView.extend({
  template: JST['lists/show'],

  render: function () {
    this.$el.html(this.template({
      list: this.model
    }));

    return this;
  }
});
