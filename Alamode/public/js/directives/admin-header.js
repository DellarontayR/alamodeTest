'use strict';
alamode.directive('adminHeader', function () {
    return {
        restrict: "E",
        templateUrl: "../views/adminHeader.html",
        link: function (scope, element, attribute) {

        },
        css:"../css/adminHeader.css"
    }
});