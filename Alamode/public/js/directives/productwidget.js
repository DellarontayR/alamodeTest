'use strict';
alamode.directive('productwidget', function () {
    return {
        restrict: 'E',
        scope: {
            catalogProduct:'='
        },
        templateUrl:'../../updatedFrontend/productwidget.html',
        link: function (scope, element, attribute) {

            
        },
        css:['../../updatedFrontend/productwidget.css','../../updatedFrontend/eCommerceAssets/styles/eCommerceStyles.css']
    }
});