TrelloApp.Views.BoardShow = Backbone.CompositeView.extend({

  template: JST['boards/show'],

  events: {
    'click button.delete': 'deleteBoard'
  },

  initialize: function () {
    this.lists = this.model.lists()
    this.lists.each(this.addList.bind(this));
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.lists, "add", this.addList);
    this.listenTo(this.lists, "remove", this.removeListView);
  },

  addList: function (list) {
    var listView = new TrelloApp.Views.ListShow({
      model: list
    });

    this.addSubview("ul.lists", listView);
  },

  render: function () {
    this.$el.html(this.template({board: this.model}));
    this.attachSubviews();
    return this;
  },

  removeListView: function (list) {
    this.removeModelSubview('ul.lists', list);
  },

  deleteBoard: function (event) {
    _.invoke(this.lists.toArray(), 'destroy');
    this.collection.remove(this.model);
    this.model.destroy();
    Backbone.history.navigate('', { trigger: true });
  }

});
