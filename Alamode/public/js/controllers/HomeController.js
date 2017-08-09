'use strict';

alamode.controller('HomeController', function($scope, $location) {
    var home = this;
    home.goEat  = function(){
        $location.path('/menu');
    };
    home.modalShown = false;
    home.toggleModal = function(){
        home.modalShown = !home.modalShown;
    };
});
