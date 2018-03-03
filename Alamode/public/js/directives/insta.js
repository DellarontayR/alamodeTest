'use strict';
alamode.directive('insta', function () {
    return {
        restrict: 'E',
        template: ' <script  style="height:100%" src="https://lightwidget.com/widgets/lightwidget.js"></script><iframe id="insta" src="https://lightwidget.com/widgets/6c3070862eb4520e9880b7583b1c710d.html" scrolling="no" allowtransparency="true" class="lightwidget-widget" style="width: 100%; border: 0;height:100%;" ></iframe>',
        link: function (scope, element, attribute) {

        }
    }
});