/*global require, module */
var express = require('express'),
    router = express.Router(),
    formidable = require('formidable'),
    util = require('util'),
    ApiRouter = function (db) {
        "use strict";

        console.log("todo: setting db:" + db);
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
        console.log("f:" + util.inspect({ files: files}));
        res.writeHead(200, {'content-type': 'text/plain'});
        res.write('received upload:\n\n');
        res.end(util.inspect({ files: files}));
    });

    return;
});

exports = module.exports = ApiRouter;
