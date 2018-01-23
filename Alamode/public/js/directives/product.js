'use strict';
alamode.directive('product', function () {
  return {
    restrict: 'E',
    scope: {
      catalogProduct: '=info'
    },
    templateUrl: '../../views/product.html',
    link: function (scope, element, attributes) {
      console.log(scope);
      var imagePath = scope.catalogProduct.imagePath;
      console.log(imagePath);
    }
  };
});

{/* <div class="product-carousel-internal" ng-repeat="catalogProduct in home.catalogProducts" ng-init="catalogProduct.itemAdded = false">

<div class="mookie-product" ng-click="mookie.showProductModal(catalogProduct)">
  <div class="mookie-product-thumbnail">
    <img class="mookie-img" ng-src="{{catalogProduct.imagePath}}" alt="Shop item">
  </div>
  <div class="mookie-shop-item-tools">
    <div class="mookie-shop-item-details">
      <p class="mookie-shop-item-price">
        {{catalogProduct.price | currency}}
      </p>
      <h3 class="mookie-shop-item-title">
        <span class="mookie-title">{{catalogProduct.title}}</span>
      </h3>
    </div>

    <a href="#" class="mookie-add-to-cart">
      <em class="mookie-add-to-cart-plus" ng-click="mookie.addToCart(catalogProduct,$event); $event.stopPropagation();$event.preventDefault();">
        <i class="fas fa-plus fa-2x" ></i>
        <i class="fas fa-check-circle fa-2x hiddenCheck" ></i>

      </em>

    </a>

  </div>

</div> */}

alamode.directive('modalDialog', function () {
  return {
    restrict: 'E',
    scope: {
      show: '='
    },
    replace: true, // Replace with the template below
    transclude: true, // we want to insert custom content inside the directive
    link: function (scope, element, attrs) {
      scope.dialogStyle = {};
      if (attrs.width)
        scope.dialogStyle.width = attrs.width;
      if (attrs.height)
        scope.dialogStyle.height = attrs.height;
      scope.hideModal = function () {
        scope.show = false;
      };
    },
    template: '../../views/product.html' // See below
  };
});