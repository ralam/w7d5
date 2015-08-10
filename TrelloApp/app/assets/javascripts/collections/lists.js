TrelloApp.Collections.Lists = Backbone.Collection.extend({
  url: 'api/lists',
  model: TrelloApp.Models.List,

  comparator: function (list) {
    return list.get('ord');
  }
})
