"use strict";
angular.module('appRoutes',['ngRoute']).config(function ($routeProvider, $locationProvider){
    $routeProvider.when('/',{
        //controller: 'HomeController',
        templateUrl: '../../views/home.html'
    }).when('/about',{
        templateUrl: '../../views/about.html'
    }).when('/menu',{
        templateUrl: '../../views/menu.html'
    }).otherwise({
        redirectTo: '/'
    });

    $locationProvider.html5Mode({
        enabled:true,
        requireBase: false
    });
});