TrelloApp.Views.BoardShow = Backbone.CompositeView.extend({

  template: JST['boards/show'],

  events: {
    'click button.delete': 'deleteBoard'
  },

  initialize: function () {
    this.lists = this.model.lists()
    this.lists.each(this.addList.bind(this));
    // this.cards = []
    // this.lists.each(function (list) {
    //   this.cards.append(list.cards());
    // }.bind(this));
    // this.cards.forEach(this.addCard.bind(this));
    // this.listenTo(this.cards, "add", this.addList);
    // this.listenTo(this.cards, "remove", this.removeListView);
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.lists, "add", this.addList);
    this.listenTo(this.lists, "remove", this.removeListView);
  },

  render: function () {
    this.$el.html(this.template({board: this.model}));
    this.attachSubviews();
    return this;
  },

  addList: function (list) {
    var listView = new TrelloApp.Views.ListShow({
      model: list
    });

    this.addSubview("ul.lists", listView);
  },

  removeListView: function (list) {
    this.removeModelSubview('ul.lists', list);
  },

  deleteBoard: function (event) {
    _.invoke(this.lists.toArray(), 'destroy');
    this.collection.remove(this.model);
    this.model.destroy();
    Backbone.history.navigate('', { trigger: true });
  },

  // addCard: function (card) {
  //   var cardView = new TrelloApp.Views.CardShow({
  //     model: card
  //   });
  //
  //   this.addSubview("li.list", cardView);
  // }

});
