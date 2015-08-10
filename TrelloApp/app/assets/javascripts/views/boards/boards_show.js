TrelloApp.Views.BoardShow = Backbone.CompositeView.extend({

  template: JST['boards/show'],

  initialize: function () {
    this.lists = this.model.lists()
    this.lists.each(this.addList.bind(this));
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.lists, "add", this.addList);
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
  }

});
