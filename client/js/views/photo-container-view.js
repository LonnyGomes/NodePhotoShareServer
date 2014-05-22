/*global define */
define([
    'view',
    'collections/photos-collection',
    'jquery',
    'photoswipe',
    'hbs!templates/photo-container-view',
    'lazyload'
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
                    //set up lazy loading as well
                    $("img.lazy").lazyload();
                    images.photoSwipe({ enableMouseWheel: false, enableKeyboard: false });
                }
            }
        }
    });
});
