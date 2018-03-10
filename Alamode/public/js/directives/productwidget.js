'use strict';
alamode.directive('productwidget', function () {
    return {
        restrict: 'E',
        scope: {
            catalogProduct: '=info'
        },
        templateUrl: '../../updatedFrontend/productwidget.html',
        link: function (scope, element, attribute) {
            console.log(scope);
            scope.$watch('catalogProduct', function () {
                // all the code here...
                console.log(scope.catalogProduct);
            });

        },
        css: ['../../updatedFrontend/productwidget.css']
    }
});