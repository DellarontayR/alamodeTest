var alamode = angular.module('alamode',['ngRoute']);

var User = require('../../app/models/user');

alamode.config(function ($routeProvider){
    $routeProvider.when('/',{
        //controller: 'HomeController',
        templateUrl: '../views/home.html'
    }).when('/about',{
        templateUrl: '../views/about.html'
    }).otherwise({
        redirectTo: '/'
    });

    $locationProvider.html5Mode({
        enabled:true,
        requireBase: false
    });
});