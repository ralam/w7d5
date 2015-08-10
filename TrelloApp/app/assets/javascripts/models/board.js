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
      this._lists = new TrelloApp.Collections.Lists([], { board: this });
      //FIGURE OUT WHY THIS IS EMPTY
      return this._lists;
    }
  }
});
