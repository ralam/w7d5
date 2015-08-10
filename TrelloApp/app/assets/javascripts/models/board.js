TrelloApp.Models.Board = Backbone.Model.extend({
  urlRoot: 'api/boards',

  parse: function (payload) {
    if (payload.lists) {
      this.lists().set(payload.lists);
      delete payload.lists;
    }

    return payload;
  },

  lists: function () {
    if (!this._lists) {
      this._lists = new TrelloApp.Collections.Lists([], { board: this });
    }
    return this._lists;
  }
});
