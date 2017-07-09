'use strict';
alamode.controller('HomeController', ['$scope','$location',function($scope, $location) {

    var home = this;
    home.goEat  = function(){
        $location.path('/menu');
        console.log("eat");
    };

    //Home Screen scenarios
    //User comes to home and is welcomed by bright images of cookie dough products
    //He has easy access to acccessing the menu in fun and spelled out verbiage
    //He Also is able to see discounts, deals, and newsletters of the cucrrent business opeartions of Mookie Dough
    //Javascript implementation of that could include more $location statement that could be substituted by the <a> tag
    //In main controller the user instance must be handled



    //Social media channel goto functions could be simplified into <a href="location"> tags
    home.goToInsta = function(){
        //Go to instagram account
        // $location.path('/menu');
    }

    home.goToInsta = function(){
        //Go to instagram account
        // $location.path('/menu');
    }
    home.goToFB = function(){
        //Go to facebook account
        // $location.path('/menu');
    }
    home.goToTwitter = function(){
        //Go to twitter account
        // $location.path('/menu');
    }

}]);
