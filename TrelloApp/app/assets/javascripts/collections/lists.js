TrelloApp.Collections.Lists = Backbone.Collection.extend({
  url: 'api/lists',
  model: TrelloApp.Models.List,

  comparator: function (list) {
    return list.get('ord');
  },

  getOrFetch: function (id) {
    var list = this.get(id);
    var collection = this;
    if (list) {
      list.fetch();
    } else {
      list = new TrelloApp.Models.List({id: id});
      collection.add(list);
      list.fetch({
        error: function () { collection.remove(list); }
      });
    }
    return list;
  }
})
