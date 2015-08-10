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
    if (this._lists === undefined) {
      this._lists = new TrelloApp.Collections.Lists([], { list: this });

      return this._lists;
    }
  }
});
