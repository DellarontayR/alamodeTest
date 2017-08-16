'use strict';

alamode.controller('TestController', function($scope, $location, User) {
    var app = this;
    app.users = false;
    User.getUsers().then(function(data){
        if(data.data.success){
            app.users = data.data.users;
            console.log(app.users);


        }else{
            console.log("There was an error getting the user list");
        }
    });

    Product.getProducts().then(function(data){
        if(data.data.success){
            console.log(data.data.products);
        }
        else{
            console.log('no products');
        }
    });
});
