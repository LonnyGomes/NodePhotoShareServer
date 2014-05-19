/*global define */
define([
    'view',
    'collections/photos-collection',
    'hbs!templates/photo-container-view'
], function (View, PhotosCollection, template) {
    "use strict";
    return View.extend({
        name: 'photo-container-view',
        template: template,
        //id: "photoContainer",
        collection: new PhotosCollection()
    });
});
