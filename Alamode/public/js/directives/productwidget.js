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
            console.log(scope.$parent.mookie);
            // scope.$watch('catalogProduct', function () {
            //     // all the code here...
            //     console.log(scope.catalogProduct);
            //     console
            // });

        },
        css: ['../../updatedFrontend/productwidget.css']
    }
});