/*global define */
define([
    'view',
    'collections/photos-collection',
    'jquery',
    'photoswipe',
    'hbs!templates/photo-container-view'
], function (View, PhotosCollection, $, photoswipe, template) {
    "use strict";
    return View.extend({
        name: 'photo-container-view',
        template: template,
        id: "photoContainer",
        collection: new PhotosCollection(),
        events: {
            "rendered:collection" : function (e) {
                var images = $('.thumbnail a');

                if (images.length) {
                    images.photoSwipe({ enableMouseWheel: false, enableKeyboard: false });
                }
            }
        }
    });
});
