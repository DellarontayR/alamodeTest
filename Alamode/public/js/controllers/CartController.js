'use strict';

alamode.controller('CartController', function($scope, $location, User, Cart, Auth,Product) {
    var app = this;
    app.user = {};
    app.user.username = "";


    // app.testCharge = function(){         
    //     stripe.charges.create({
    //     amount: 2000,
    //     currency: "usd",
    //     source: "tok_mastercard", // obtained with Stripe.js
    //     metadata: {'order_id': '6735'}
    //     });

    // };

    if(Auth.isLoggedIn()){
        Auth.getUser().then(function(retData){
            if(retData.data.success){
                app.user.username = retData.data.username;                
            }
        });
    }

});