"use strict";
var alamode = angular.module('alamode',['appRoutes','userServices','authServices','cartServices',
'productServices','contactMessageServices','subscriptionServices','stripeServices']).config(function($httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptors');
});

