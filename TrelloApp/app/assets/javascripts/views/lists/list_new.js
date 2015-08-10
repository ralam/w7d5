TrelloApp.Views.ListNew = Backbone.View.extend({
  template: JST['lists/new'],

  events: {
    "submit form.new-list": "addList"
  },

  initialize: function (options) {
    this.board = options.board
  },

  render: function () {
    this.$el.html(this.template({
      board: this.board
    }));
    return this;
  },

  addBoard: function (event) {
    event.preventDefault();
    var formData = $(event.currentTarget).serializeJSON;
    var model = new TrelloApp.Models.List();
    model.save(formData.list, {
      success: function (list) {
        this.collection.add(list);
        var boardId = list.attributes.board_id;
        Backbone.history.navigate('/boards/' + boardId, { trigger: true });
      }.bind(this)
    });
  }
});
