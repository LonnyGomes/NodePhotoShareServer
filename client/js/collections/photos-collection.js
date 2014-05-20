/*global define */
define(['collection', 'models/photo-model'], function (Collection, PhotoModel) {
    "use strict";

    return Collection.extend({
        url: '/api/photos',
        name: 'PhotosCollection',
        model: PhotoModel,
        parse: function (response) {
            //the expected api response is as follows:
            // {
            //    isSuccess: true | false
            //    message: data | error message
            // }
            if (response.isSuccess) {
                console.log("returning:" + JSON.parse(response.message));
                return JSON.parse(response.message);
            } else {
                console.error("Error retreiving photos:" + response.message);
                //silently fail
                return [];
            }
        }
    });
});
