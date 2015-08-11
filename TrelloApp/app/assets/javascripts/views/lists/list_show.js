TrelloApp.Views.ListShow = Backbone.CompositeView.extend({
  template: JST['lists/show'],

  initialize: function () {
    this.cards = this.model.cards();
    this.cards.each(this.addCard.bind(this));
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.cards, "add", this.addList);
    this.listenTo(this.cards, "remove", this.removeListView);
  },

  tagName: 'li',
  className: 'list',

  render: function () {
    this.$el.html(this.template({
      list: this.model
    }));
    this.attachSubviews();
    return this;
  },


});
