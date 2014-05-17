define([
  'view',
  'hbs!templates/base-view'
], function (View, template) {
  return View.extend({
    name: 'base-view',
    template: template
  });
});
