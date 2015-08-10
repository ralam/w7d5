TrelloApp.Views.BoardNew = Backbone.View.extend({

  template: JST['boards/new'],

  events: {
    "submit form.new-board": "addBoard"
  },

  render: function () {
    this.$el.html(this.template);
    return this;
  },

  addBoard: function (event) {
    event.preventDefault();
    var formData = $(event.currentTarget).serializeJSON();
    var model = new TrelloApp.Models.Board();
    model.save(formData.board,{
      success: function (board) {
        this.collection.add(board);
        var boardId = board.attributes.id;
        Backbone.history.navigate('/boards/' + boardId, { trigger: true });
      }.bind(this)
    });
  }

});
