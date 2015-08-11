TrelloApp.Views.CardShow = Backbone.CompositeView.extend({
  template: JST['cards/show'],

  className: 'card',

  render: function () {
    this.$el.html(this.template({
      list: this.model
    }));

    return this;
  }
});
