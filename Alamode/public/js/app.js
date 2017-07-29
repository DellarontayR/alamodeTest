"use strict";
var alamode = angular.module('alamode',['appRoutes','userServices','authServices','cartServices','productServices']).config(function($httpProvider) {
        console.log("in app");

    $httpProvider.interceptors.push('AuthInterceptors');
    console.log("in app");
});
