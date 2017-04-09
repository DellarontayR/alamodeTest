var alamode = angular.module('alamode',['ngRoute']);

alamode.config(function ($routeProvider){
    $routeProvider.when('/',{
        controller: 'HomeController',
        templateUrl: 'views/index.html'
    }).otherwise({
        redirectTo: '/'
    });
});