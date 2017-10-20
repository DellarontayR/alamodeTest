"use strict";
var alamode = angular.module('alamode',['appRoutes','userServices','authServices','cartServices',
'productServices','contactMessageServices','subscriptionServices','stripeServices','gpsServices']).config(function($httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptors');
});

