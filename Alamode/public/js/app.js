"use strict";
var alamode = angular.module('alamode',['appRoutes','userServices','authServices','cartServices','productServices']).config(function($httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptors');
});
