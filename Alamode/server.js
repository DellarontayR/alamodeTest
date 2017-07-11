var express = require("express");
var app = express();
var port = process.env.PORT || 8080;
port = 8080;
var morgan = require('morgan');
var mongoose = require('mongoose');

var bodyParser = require('body-parser');
var router = express.Router();
var appRoutes = require('./app/routes/api')(router);
var path = require('path');
var passport = require('passport');
var child_process = require('child_process');
//var nwgui = require('passport');
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));
app.use('/api',appRoutes);

mongoose.Promise = global.Promise;
/**
 * Connection to mongodb database on port: 27107
 */
mongoose.connect('mongodb://localhost:27017/test', function(err){
    if(err){
        console.log("database not connected " + err);
    }else{
        console.log("database connected");
    }
});
/**
 * Redirect to main template of the single page application
 */
app.get('*',function(req,res){
    res.sendFile(path.join(__dirname + '/public/views/index.html'));
});

/**
 * Server starts listening for requests and provide public html files and apis to public users
 */
app.listen(port, function(){
    console.log("Api started on port: " + port);
}
);

module.exports = app;