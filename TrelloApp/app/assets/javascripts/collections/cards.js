TrelloApp.Collections.Cards = Backbone.Collection.extend({
  url: 'api/cards',
  model: TrelloApp.Models.Card,

  comparator: function (card) {
    return card.get('ord');
  },

  getOrFetch: function (id) {
    var card = this.get(id);
    var collection = this;
    if (card) {
      card.fetch();
    } else {
      card = new TrelloApp.Models.Card({id: id});
      collection.add(card);
      card.fetch({
        error: function () { collection.remove(card); }
      });
    }
    return card;
  }
});
