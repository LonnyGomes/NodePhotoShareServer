/*global define */
define([
    'view',
    'collections/photos-collection',
    'jquery',
    'photoswipe',
    'socket_io',
    'hbs!templates/photo-container-view',
    'lazyload'
], function (View, PhotosCollection, $, photoswipe, io, template) {
    "use strict";
    return View.extend({
        name: 'photo-container-view',
        template: template,
        id: "photoContainer",
        collection: new PhotosCollection(),
        initialize: function () {
            this.collection.comparator = function (a, b) {
                return new Date(a.get("timestamp")) > new Date(b.get("timestamp"));
            };
            this.collection.sort();
        },
        socket: {},
        events: {
            ready: function (e) {
                var that = this;
                this.socket = io.connect('http://localhost');
                this.socket.on('photo', function (data) {
                    //alert("got data: " + data.photoUrl);
                    //we got data, lets refetch the collection
                    //TODO: is this a performance concern?
                    //that.collection.fetch();
                    that.collection.add(data);
                });
            },
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
