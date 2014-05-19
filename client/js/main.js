require([
  'jquery',
  'backbone',
  'views/root',
  'routers/base-router',
  'helpers'
], function ($, Backbone, RootView, Router) {
  $(function() {

console.log("history started");
    // Initialize your routers here
    new Router();
    // RootView may use link or url helpers which
    // depend on Backbone history being setup
    // so need to wait to loadUrl() (which will)
    // actually execute the route
    RootView.getInstance(document.body);

    // This will trigger your routers to start
    Backbone.history.loadUrl();
  });
});
