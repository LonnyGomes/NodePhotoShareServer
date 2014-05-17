/*global define */
define([
    'backbone',
    'views/root',
    'views/base-view'
], function (Backbone, RootView, IndexView) {
    "use strict";

    return Backbone.Router.extend({
        routes: {
            "": "index"
        },
        index: function () {
            var view = new IndexView();
            RootView.getInstance().setView(view);
        }
    });
});
