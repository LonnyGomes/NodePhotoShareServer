/*global define, require */
define([
    'backbone',
    'views/root'
], function (Backbone, RootView, IndexView) {
    "use strict";
    Backbone.history.start({
        pushState: false,
        hashChange: true,
        root: '/',
        silent: true
    });

    return Backbone.Router.extend({
        routes: {
            "": "index"
        },
        index: function () {
            require(['views/root', 'views/base-view'], function (RootView, IndexView) {
                var view = new IndexView();
                RootView.getInstance().setView(view);
            });
        }
    });

});
