app.directive('product', function() { 
  return {
      restrict: 'E',
      scope:{
          info: '='
      },
    templateUrl: '/views/product.html' 
  }; 
});