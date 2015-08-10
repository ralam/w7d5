TrelloApp.Views.BoardShow = Backbone.CompositeView.extend({

  template: JST['boards/show'],

  initialize: function () {
    this.model.lists().each(this.addList.bind(this));
    this.listenTo(this.collection, "sync", this.render);
  },

  addList: function (list) {
    var listView = new TrelloApp.Views.ListShow({
      model: list
    });

    this.addSubView("ul.lists", listView);
  },

  render: function () {
    this.$el.html(this.template({board: this.model}));
    this.attachSubviews();
    return this;
  }

});
