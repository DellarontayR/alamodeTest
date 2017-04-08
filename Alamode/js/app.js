var alamode = angular.module('alamode',['ngRoute']);

alamode.config(function ($routeProvider){
    $routeProvider.when('/',{
        controller: 'homeController',
        templateUrl: 'views/index.html'
    });
});