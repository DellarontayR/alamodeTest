"use strict";
var alamode = angular.module('alamode',['appRoutes','userServices','authServices','cartServices',
'productServices','contactMessageServices','subscriptionServices','stripeServices','gpsServices','orderServices','inventoryServices','ui.carousel','ngAnimate'
]).config(function($httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptors');
});

