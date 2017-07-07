'use strict';

alamode.controller('IndexController', ['$scope', function($scope) {
    $scope.goToAbout = function($scope){
        $scope.currentNavItem ="about";
    };
    $scope.goToCheckout = function($scope){
        $scope.currentNavItem = "checkout";
    };
    $scope.goToMenu = function($scope){
        $scope.currentNavItem = "menu";
    };
    $scope.goToProfile = function($scope){
        $scope.currentNavItem = "profile";
    };
    $scope.goToHome= function($scope){
        $scope.currentNavItem = "home";
    };
}]);