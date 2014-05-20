define([
  'layout-view',
  'hbs!templates/root',
  'routers/base-router'
], function(LayoutView, rootTemplate) {
  console.log("creating root view");
  var RootView = LayoutView.extend({
    name: 'root',
    id: 'rootView',
    template: rootTemplate
  });

  var instance;
  RootView.getInstance = function(target) {
    if (!instance) {
      instance = new RootView();
      instance.appendTo(target || document.body);
    }
    return instance;
  };

  return RootView;
});
