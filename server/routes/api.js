var express = require('express'),
    router = express.Router(),
    formidable = require('formidable'),
    util = require('util');

router.get('/', function(req, res) {
    res.end("OK");
});

router.post('/upload', function (req, res) {
    var form = new formidable.IncomingForm();

    form.parse(req, function(err, fields, files) {
        res.writeHead(200, {'content-type': 'text/plain'});
        res.write('received upload:\n\n');
        res.end(util.inspect({fields: fields, files: files}));
    });

    return;
});

module.exports = router;
