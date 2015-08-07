window.TrelloApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    alert('Hello from Backbone!');
    Backbone.history.start();
  }
};

$(document).ready(function(){
  TrelloApp.initialize();
});
