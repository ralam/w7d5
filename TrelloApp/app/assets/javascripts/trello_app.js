window.TrelloApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    alert('Hello from Backbone!');
    var router = new TrelloApp.Routers.Router();
    Backbone.history.start();
  }
};

$(document).ready(function(){
  TrelloApp.initialize();
});
