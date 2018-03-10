'use strict';
alamode.directive('mookieCarousel', function () {
  return {
    restrict: 'E',
    scope: {
      catalogProduct: '=info'
    },
    templateUrl: '../../views/mookie-carousel.html',
    link: function (scope, element, attributes) {
  
    }
  };
});
