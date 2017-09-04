'use strict';

alamode.controller('ProfileController', function($scope, $location, User) {
    var profileCtrl = this;
    profileCtrl.carts = false;
    profileCtrl.cartHistory = [{}];//tracking number, date purchased,order status, total
    //forget tracking number for now

    // profileCtrl.getCartHistory = function(cart,callback){
    //     var cartHistoryData = {};
    //     cartHistoryData.datePurchased = cart.checkoutDate;
    //     cartHistoryData.orderState = 'Complete';
    //     cartHistoryData.total = 0;
    //     cart.products.forEach(function(product){ 
    //         cartHistoryData.total += product.price * product.qty;
    //     });
    //     return callback(cartHistoryData);
    // };

    
    $scope.mookie.getEmailAndUsername(function(userData){
        profileCtrl.username = userData.username;
        profileCtrl.userEmail = userData.userEmail;
        User.getUser(userData).then(function(data){

            var cartData ={};
            cartData.user = data.data.user._id;
            User.getOldCarts(cartData).then(function(data){
                console.log(data);
                if(data.data.success){
                    profileCtrl.cartHistory = [{}];
                    profileCtrl.carts = data.data.carts;
                    profileCtrl.carts.forEach(function(cart){
                        var cartHistoryData = {};
                        cartHistoryData.datePurchased = cart.checkoutDate;
                        cartHistoryData.orderStatus = 'Complete';
                        cartHistoryData.total = 0;
                        cart.products.forEach(function(product){ 
                            cartHistoryData.total += product.price;
                        });
                        console.log(cartHistoryData);
                        if(cartHistoryData.datePurchased !== null && cartHistoryData.datePurchased !== ''){
                            profileCtrl.cartHistory.push(cartHistoryData);                                                                           
                        }
                    });
                    console.log(profileCtrl.cartHistory);
                    // var json = angular.toJson( $scope.appdata );
                    // profileCtrl.cartHistory = angular.toJson(profileCtrl.cartHistory);
                    profileCtrl.cartHistory = profileCtrl.cartHistory.filter(value=> Object.keys(value).length !== 0);
                    console.log(profileCtrl.cartHistory);
                    
                }
                else{
                    console.log('getting old carts not successful');
                }
            });

        });
 
        
    });
    
});
