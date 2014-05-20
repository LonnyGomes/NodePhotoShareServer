/*global define */
define([
    'view',
    'views/photo-container-view',
    'hbs!templates/base-view'
], function (View, PhotoContainerView, template) {
    "use strict";

    return View.extend({
        name: 'base-view',
        template: template,
        photoContainer: new PhotoContainerView()
    });
});
