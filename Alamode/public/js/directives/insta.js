'use strict';
alamode.directive('insta', function () {
    return {
        restrict: 'E',
        template: ' <script  style="height:100%" src="https://lightwidget.com/widgets/lightwidget.js"></script><iframe id="insta" src="https://lightwidget.com/widgets/6c3070862eb4520e9880b7583b1c710d.html" scrolling="no" allowtransparency="true" class="lightwidget-widget" style="width: 100%; border: 0;height:100%;" ></iframe>',
        link: function(scope,element,attribute){
    
            
            // var height = angular.element(".lightwidget")[0].offsetHeight;
            var lightwidget = element.find(".lightwidget");
            //  var height= angular.element(lightwidget).offsetHeight;
            var height = $('.lightwidget').height();
            var widget = $(".lightwidget");
            console.log("here is height of lightwidget");
            console.log(lightwidget); 
            console.log(widget);
            console.log(height);
            element.css({height:height});
            console.log(element);
            var aHeight = document.getElementsByClassName("lightwidget").offsetHeight;
            console.log(aHeight);
            var child = element.children()[0];
            console.log(angular.element(element));
            console.log(element);
            element.ready(function(){
                var a = $('.lightwidget').height();
                console.log(a);
            })
        }
    }
});