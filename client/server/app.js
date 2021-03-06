var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//monog db connection
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/photoBooth');
var db = mongoose.connection;

var app = express();

var io = null;
app.setSocket = function (socket) {
    //socket should be set
    io = socket;
};

//delegate methods used by api router
app.onUploadSuccess = function (data) {
    console.log(data.photoUrl);
    io.sockets.emit('photo', data);
}

//routes
var ApiRouter = require('./routes/api');
var api = new ApiRouter(mongoose, app);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.resolve(path.join(__dirname, '../dist'))));
app.use("/photos", express.static(path.resolve(path.join(__dirname, 'public/photos'))));
app.use("/bower_components", express.static(path.resolve(path.join(__dirname, '../bower_components'))));


app.use('/api', api.router);

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

//handle DB stuff
db.on('error', function (err) {
    console.error("Had problems connecting to mongodb: " + err);
    process.exit(1);
});
db.once('open', function callback () {
  console.log("We connected to mongodb!");
});

module.exports = app;
