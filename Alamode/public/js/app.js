var alamode = angular.module('alamode',['ngRoute']);
var User = require('../../app/models/user');
alamode.config(function ($routeProvider){
    $routeProvider.when('/',{
        controller: 'HomeController',
        templateUrl: '/views/index.html'
    }).otherwise({
        redirectTo: '/'
    });
});