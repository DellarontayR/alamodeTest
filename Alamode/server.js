var express = require("express");
var app = express();
var port = process.env.PORT || 8080;
var morgan = require('morgan');
var mongoose = require('mongoose');

var bodyParser = require('body-parser');

var appRoutes = require('./app/routes/api')(router);
var router = express.Router();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(appRoutes);

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/test', function(err){
    if(err){
        console.log("database not connected " + err);
    }else{
        console.log("database connected");
    }
});



app.get('/home', function(req,res){
    res.send("Hello I see you over there");
});

app.listen(port, function(){
    console.log("Api started on port" + port);
}
);