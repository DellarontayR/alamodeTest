'use strict';

alamode.controller('TestController', function($scope, $location, User) {
    var app = this;
    User.getUsers().then(function(data){
        if(data.data.success){
            app.users = data.data.users;
            console.log(app.users);


        }else{
            console.log("There was an error getting the user list");
        }
    });

                console.log(app.users);

});
