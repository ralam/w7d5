window.TrelloApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var router = new TrelloApp.Routers.Router();
    Backbone.history.start();
  }
};

$(document).ready(function(){
  TrelloApp.initialize();
});
