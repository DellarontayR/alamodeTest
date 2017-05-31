var alamode = angular.module('alamode',['appRoutes','userServices','authServices','cartServices']).config(function($httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptors');
});
