"use strict";
var express = require("express");
var app = express();
var port = process.env.PORT || 8080;
port = 8081;
var morgan = require('morgan');
var mongoose = require('mongoose');

var bodyParser = require('body-parser');
var router = express.Router();
var appRoutes = require('./app/routes/api')(router);
var path = require('path');
var passport = require('passport');
var social = require('./app/passport/passport.js')(app, passport);
var child_process = require('child_process');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use('/api', appRoutes);

const publicPath = path.resolve(__dirname, "public"); 
const mediaPath = path.join(publicPath, "/imgs/Media");

app.use('/sites/default/files',express.static(mediaPath));
mongoose.Promise = global.Promise;

/**
 * Connection to mongodb database on port: 27107
 */
mongoose.connect('mongodb://13.56.151.113:27017/production', function (err) {
    if (err) {
        console.log("database not connected " + err);
    } else {
        console.log("database connected");
    }
});

/**
 * Redirect to main template of the single page application
 */
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/views/index.html'));
});

/**
 * Server starts listening for requests and provide public html files and apis to public users
 */
app.listen(port, function () {
    console.log("Api started on port: " + port);
}
);

module.exports = app;

