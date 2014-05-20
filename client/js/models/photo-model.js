define(['model'], function (Model) {
    return Model.extend({
        name: 'PhotoModel',
        idAttribute: '_id',
        photoUrl: '',
        thumbUrl: ''
    });
});
