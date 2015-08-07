window.TrelloApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var $rootEl = $('#content');
    var boards = new TrelloApp.Collections.Boards();
    boards.fetch();
    var router = new TrelloApp.Routers.Router({
      collection: boards,
      $rootEl: $rootEl
    });
    Backbone.history.start();
  }
};

$(document).ready(function(){
  TrelloApp.initialize();
});
