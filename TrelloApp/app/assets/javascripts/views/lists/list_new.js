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

  addList: function (event) {
    event.preventDefault();
    var boardId = this.board.attributes.id;
    var formData = $(event.currentTarget).serializeJSON();
    formData.list.board_id = boardId;
    var model = new TrelloApp.Models.List();
    model.save(formData.list, {
      success: function (list) {
        this.collection.add(list);
        Backbone.history.navigate('/boards/' + boardId, { trigger: true });
      }.bind(this)
    });
  }
});
