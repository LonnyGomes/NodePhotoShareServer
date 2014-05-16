/*global require, module, exports */
var express = require('express'),
    router = express.Router(),
    formidable = require('formidable'),
    util = require('util'),
    db = null,
    photoSchema = null,
    Photo = null,
    initPhotoSchema = function (mg) {
        "use strict";

        var schema = mg.Schema({
            size: Number,
            originalPath: String,
            originalPhotoName: String
        });

        return schema;
    },
    sendResult = function (res, isSucc, msg) {
        "use strict";

        var obj = {
            isSuccess: isSucc,
            message: msg
        };
        res.writeHead(200, {'content-type': 'application/json'});
        res.end(JSON.stringify(obj));
    },
    ApiRouter = function (dbRef) {
        "use strict";

        //save mongo reference
        db = dbRef;

        //initialize mongoose schema and models
        photoSchema = initPhotoSchema(db);
        Photo = db.model("Photo", photoSchema);

        return {
            router: router
        };
    };

router.get('/', function (req, res) {
    "use strict";
    res.end("OK");
});

router.post('/upload', function (req, res) {
    "use strict";

    var form = new formidable.IncomingForm();

    form.parse(req, function (err, fields, files) {
        var fileObj,
            photo;

        //if a file is provided, continue to process image
        if (files && Object.keys(files).length) {
            //Create mongodb model and persist it
            fileObj = files[Object.keys(files)[0]]; //get the file obj ref

            //create mongo model instance and persist to datastore
            photo = new Photo({
                originalPath: fileObj.path,
                originalPhotoName: fileObj.name,
                size: fileObj.size
            });

            photo.save(function (err, model) {
                if (err) {
                    sendResult(res, false, "Failed while processing image!");
                } else {
                    sendResult(res, true, "Photo upload was a success");
                }
            });

            //res.end(util.inspect({ files: files}));
        } else {
            sendResult(res, false, "No photo was supplied!");
        }
    });

    return;
});

module.exports = ApiRouter;
