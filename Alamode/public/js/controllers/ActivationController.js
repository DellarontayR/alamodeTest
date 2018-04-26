'use strict';
alamode.controller('activationCtrl', function ($scope, $location, User,$routeParams,$timeout) {
    var app = this;
    app.messageBody = {};

    User.activateAccount($routeParams.token).then(function(data){
        if(data.data.success){
            app.messageBody.message = 'Account Successfully Activated';
            $timeout(function () {
                $location.path('/register');
            }, 2000);
        }
        else{
            app.messageBody.message = 'Account could not be activated. Activation link may have expired';
        }
    })

});
