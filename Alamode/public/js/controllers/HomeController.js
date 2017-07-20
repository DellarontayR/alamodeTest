'use strict';

alamode.controller('HomeController', function($scope, $location) {
    console.log('home bitchers');
    var home = this;
    home.goEat  = function(){
        $location.path('/menu');
        console.log("eat");
    };
    home.modalShown = false;
    home.toggleModal = function(){
        home.modalShown = !home.modalShown;
    };
});
