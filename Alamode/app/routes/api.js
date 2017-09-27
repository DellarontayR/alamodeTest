'use strict';
var User = require('../models/user'); // Import User Model
var Product = require('../models/product');
var Cart = require('../models/cart');
var Subscription = require('../models/subscription');
var ContactMessage = require('../models/contactmessage');
var SiteVisit = require('../models/sitevisit');
var jwt = require('jsonwebtoken'); // Import JWT Package
var secret = 'zm!_0@0hu_7&ii-@j&0wpm3t%ojnvmjx6j0!1*&j@x51&mdzk@'; // Create custom secret for use in JWT
var nodemailer = require('nodemailer'); // Import Nodemailer Package
var stripe = require('stripe')('sk_test_N3kcDk7Gi6QdJewLusdBT2Tc');

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;


// var sgTransport = require('nodemailer-sendgrid-transport'); // Import Nodemailer Sengrid Transport Package

module.exports = function (router) {

    // Start Sendgrid Configuration Settings (Use only if using sendgrid)
    // var options = {
    //     auth: {
    //         api_user: 'dbrian332', // Sendgrid username
    //         api_key: 'PAssword123!@#' // Sendgrid password
    //     }
    // };

    // Nodemailer options (use with g-mail or SMTP)
    let client = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'dellreadus@gmail.com', // Your email address
            pass: '41508046' // Your password
        },
        tls: { rejectUnauthorized: false }
    });
    // var client = nodemailer.createTransport(sgTransport(options)); // Use if using sendgrid configuration
    // End Sendgrid Configuration Settings  


    // SiteVisit apis

    router.post('/getSiteVisitors',function(req,res){
        SiteVisit.find({}).select().exec(function(err,siteVisits){
            if(err){
                res.json({success:false,message:'There was an error trying to look up site visitors',err:err});
            }
            else{
                if(!siteVisits){
                    res.json({success:true,message:'There are no site visitors which should be impossible if youre visiting the site.',numberOfSiteVisitors:0});
                }
                else{
                    res.json({success:true,message:'Site visitors found',numberOfSiteVisitors:siteVisits.length});
                }
            }
        });
    });

    router.post('/checkVisitor',function(req,res){
        console.log(req.ip);
        if(req.body.ipAddress == null || req.body.ipAddress==''){
            res.json({success:false,message:'IP address not included in psot body'});
        }
        else{
            SiteVisit.findOne({ipAddress:req.body.ipAddress}).select().exec(function(err,siteVisit){
                if(err){
                    res.json({success:false,message:'There was an error trying to look for the ipAddress',err:err});
                }
                else{
                    if(!siteVisit){
                        var newSiteVisit = new SiteVisit();
                        newSiteVisit.ipAddress = req.body.ipAddress;
                        newSiteVisit.save(function(err,newSite){
                            if(err){
                                res.json({success:false,message:'There was an error tyring to save new new site visitation',err:err});
                            }
                            else{
                                res.json({success:true,message:'This was the users first time visiting the site'});                                
                            }
                        });
                    }
                    else{
                        res.json({success:true,message:'User has visited site'});
                    }
                }
            });
        }    
    });

    router.post('/getOldCarts',function(req,res){
        if(req.body.user == null || req.body.user == ''){
            res.json({success:false,message:'There was an error'});
        }
        else{
            Cart.find({oldCart:true,user:req.body.user}).populate('products').exec(function(err,carts){
                if(err){
                    res.json({success:false,message:'There was an error trying to find users cart history',err:err});
                }
                else{
                    if(!carts){
                        res.json({success:false,message:'The user has no carts'});
                    }
                    else{
                        res.json({success:true,message:'Users cart history detect',carts:carts});
                    }
                }
            });
        }
    });

    router.post('/checkout', function (req, res) {

        //I need to get the user's email or objectId or something when they send the information back to my server. Prefably objectId I suppose
        if (req.body.token == null || req.body.name == null || req.body.price == null || req.body.userEmail == null
        || req.body.userEmail == '') {
            res.json({ success: false, message: "Please try checkout again at a later time" });
        }
        else {
            stripe.charges.create({
                amount: req.body.price,
                currency: "usd",
                description:'first payment',
                source: req.body.token // obtained with Stripe.js
            }, function (err,charge) {
                if(err){
                    res.json({success:false,message:'There was an error',err:err});
                }
                else{
                    if(!charge){
                        res.json({success:false,message:'Something went wrong'});
                    }
                    else{

                        //Delete cart form user
                        //aka change user.cart to ''
                        //make users cart into an old cart
                        //aka add a userid to the cart and change the oldcart boolean value to true
                        User.findOne({email:req.body.userEmail}).select().exec(function(err,user){
                            if(err){
                                res.json({success:false,message:'There was an error trying to change user cart during checkout',err:err});
                            }
                            else{
                                if(!user){
                                    res.json({success:false,message:'There is no user with that email'});
                                }
                                else{
                                    var cartData = {};
                                    cartData.cartId = user.cart;
                                    user.cart = null;
                                    user.save(function(err,user){
                                        if(err){
                                            res.json({success:false,message:'There was an error trying to delete the userCart',err:err});
                                        }
                                        else{
                                            if(!user){
                                                res.json({success:false,message:'There was an error'});
                                            }
                                            else{
                                                Cart.findOneAndUpdate({_id:cartData.cartId},{$set:{oldCart:true,user:user._id,checkoutDate:Date.now()}}).select().exec(function(err,cart){
                                                    if(err){
                                                        res.json({success:false,message:'There was an error trying update old user cart',err:err});
                                                    }
                                                    else{
                                                        if(!cart){
                                                            res.json({success:false,message:'There was an error trying to find old user cart'});
                                                        }   
                                                        else{
                                                            res.json({success:true,message:'Charge completed successfully',charge:charge});
                                                        }
                                                    }
                                                });
                                            }
                                        }
                                    });
                                }
                            }
                        });
                    }
                }
            });
        }
    });


    // Android Apis

    router.post('/tryAndroid', function (req, res) {
        if (req.body.message == '' || req.body.message == null) {
            res.json({ success: false, message: 'Did not include a message to print out' });
        }
        else {
            console.log('We got your post');
            res.json({ success: true, message: 'We got your try android post' });
        }
    });



    // contact message api

    router.get('/getContactMessages', function (req, res) {
        ContactMessage.find({}).select('name email message').exec(function (err, contactMessages) {
            if (err) {
                res.json({ success: false, message: 'There was an error while trying to get contactMessages.', err: err });
            }
            else {
                if (!contactMessages) {
                    res.json({ success: false, message: 'There are no contact Messages' });
                }
                else {
                    res.json({ success: true, message: 'ContactMessages taken from server', contactMessages: contactMessages });
                }
            }
        });
    });

    router.post('/addContactMessage', function (req, res) {
        if (req.body.name == '' || req.body.name == null || req.body.email == null || req.body.email == '' ||
            req.body.message == null || req.body.message == '') {
            res.json({ success: false, message: 'Please fill in all your details before sending us a message!' });
        }
        else {
            var contactMes = ContactMessage();
            contactMes.name = req.body.name;
            contactMes.email = req.body.email;
            contactMes.message = req.body.message;
            contactMes.save(function (err, contactMes) {
                if (err) {
                    res.json({ success: false, message: 'There was an error while trying to save your message' });
                }
                else {
                    if (!contactMes) {
                        res.json({ success: false, message: 'There was an error while trying to save your message' });
                    }
                    else {
                        res.json({ success: true, message: 'Message sent successfully', contactMes: contactMes });
                    }
                }
            })
        }
    });


    // Subscription api

    router.get('/getSubscribers', function (req, res) {
        Subscription.find({}).select('email created').exec(function (err, subscribers) {
            if (err) {
                res.json({ success: false, message: 'There was an error trying to get subscription list' });
            }
            else {
                if (!subscribers) {
                    res.json({ success: false, message: 'There are no subscribers', err: err });
                }
                else {
                    res.json({ success: true, message: 'Subscriber list taken from server', subscribers: subscribers });
                }
            }
        });
    });

    router.post('/addSubscription', function (req, res) {
        var sub = new Subscription();
        if (req.body.subEmail == '' || req.body.subEmail == null) {
            res.json({ success: false, message: 'Email was not provided for subscription' });
        }
        else {
            sub.email = req.body.subEmail;
            sub.save(function (err, sub) {
                if (err) {
                    res.json({ success: false, message: 'Subscription could not be saved. Ensure email is configured correctly' });
                }
                else {
                    if (!sub) {
                        res.json({ success: false, message: "Subscription may already be in database" });
                    }
                    else {
                        res.json({ success: true, message: 'Email was added to subscription list.' });
                    }
                }
            });
        }
    });


    router.post('/getCart', function (req, res) {
        Cart.findById(req.body.cartId).populate('products').exec(function (err, cart) {
            if (err || !cart) {
                res.json({ success: false, message: 'Cart could not be found' });
            }
            else {
                res.json({ success: true, cart: cart });
            }
        });
    });


    router.post('/getUser', function (req, res) {
        User.findOne({ email: req.body.userEmail }).select().exec(function (err, user) {
            if (err || !user) {
                console.log(err);
                console.log('real');
                res.json({ success: false, message: err });
            }
            else {
                res.json({ success: true, user: user });
            }
        });
    });

    router.post('/removeCart',function(req,res){
        User.findOne({email:req.body.userEmail}).select().exec(function(err,user){
            if(err){
                res.json({success:false,err:err});
            }
            else{
                if(!user){
                    res.json({success:false,message:'There was no user associated with that email address'});
                }
                else{
                    user.cart = '';
                    user.save(function(err,user){
                        if(err){
                            res.json({success:false,err:err});
                        }
                        else{
                            res.json({success:true,message:'Cart removed'});
                        }
                    });
                }
            }
        });
    });


    router.get('/checkUserCart', function (req, res) {
        User.findById(req.body.userId).select().exec(function (err, user) {
            console.log(user.cart);
            if (!user.cart || user.cart == null) {
                res.json({ success: false, message: 'User does not have cart' });
            }
            else {
                res.json({ success: true, message: 'User cart found. Ok for interaction' });
            }
        });
    });
    router.post('/removeItemFromCart', function (req, res) {
        Cart.findById(req.body.cartId).select().exec(function (err, cart) {
            if (err) {
                res.json({ success: false, message: 'Cart could not be found.' });
            }
            else {
                var products = cart.get('products');
                products.forEach(function (product) {
                    if (product.product.id === req.body.productId) {
                        if (product.product.quantity > 1) {
                            product.product.quantity--;
                            // Cart.update({_id:cart.id},{'$pull':{'products':{ 'quantity':}}})
                        }
                        else if (product.product.quantity == 1) {
                            product.product.quantity--;
                            // cart.products.remove(product);
                        }
                    }
                });
                res.json({ success: true, message: 'At least I got the cart', cart: cart });
            }
        });

        //         Dive.update({ _id: diveId }, { "$pull": { "divers": { "user": userIdToRemove } }}, { safe: true, multi:true }, function(err, obj) {
        //     //do something smart
        // });

    });

    router.post('/seedCart', function (req, res) {
        var cart = new Cart();
        cart.products.push({ productId: req.body.productId, qty: req.body.quantity });
        cart.save(function (err, cart) {
            if (err || !cart) {
                res.json({ success: false, message: err });
            }
            else {
                res.json({ success: true, message: 'Cart was saved', cart: cart });
            }
        })
    });

    router.post('/addItemToCart', function (req, res) {
        var product = new Product(req.body);

        if (req.body.title == null || req.body.title == '' || req.body.description == null ||
            req.body.description == '' || req.body.price == null || req.body.price == '' || req.body.imagePath == null || req.body.imagePath == '') {
            res.json({ success: false, message: "The uploaded item wasn't set correctly please try again. " });
        }
        else {
            product.save(function (err, newProduct) {

                User.findById(req.body.userId).select().exec(function (err, user) {
                    var userData = {};
                    userData.user = user;
                    if (err || !user) {
                        res.json({ success: false, message: 'user was not found', err: err });
                    }
                    else if (user.cart == null || user.cart == "") {
                        var cart = new Cart();
                        cart.save(function (err, cart) {
                            if (err) {
                                res.json({ success: false, message: err });
                            }
                            else {
                                user.cart = cart._id;
                                user.save(function (err, user) {
                                    if (err) {
                                        console.log(err);
                                        res.json({ success: false, message: 'user could not be updated to contain cart', err: err });
                                    }
                                    else {
                                        cart.products.push(newProduct);
                                        cart.save(function (err, cart) {
                                            res.json({ success: true, message: 'User Cart has been created and updated', cart: cart });
                                        });
                                    }

                                });
                            }
                        });
                    } else {
                        Cart.findById(user.cart).select().exec(function (err, cart) {
                            if (err) {
                                res.json({ success: false, message: 'cart could not be found from user in this amazing mess' });
                            }
                            else {
                                if (!cart) {
                                    // res.json({ success: false, message: 'Could not find the cart', user: user });
                                    var cart = new Cart();
                                    cart.save(function (err, cart) {
                                        if (err) {
                                            res.json({ success: false, message: err });
                                        }
                                        else {
                                            user.cart = cart._id;
                                            user.save(function (err, user) {
                                                if (err) {
                                                    console.log(err);
                                                    res.json({ success: false, message: 'user could not be updated to contain cart', err: err });
                                                }
                                                else {
                                                    cart.products.push(newProduct);
                                                    cart.save(function (err, cart) {
                                                        res.json({ success: true, message: 'User Cart has been created and updated', cart: cart });
                                                    });
                                                }

                                            });
                                        }
                                    });

                                }
                                else {
                                    cart.products.push(newProduct);
                                    cart.save(function (err, cart) {
                                        if (err) {
                                            res.json({ success: false, message: 'There was an error trying to save new cart' });
                                        }
                                        else {
                                            res.json({ success: true, message: 'Cart has been updated', cart: cart });
                                        }

                                    });
                                }
                            }
                        });
                    }
                });
            });
        }
    });

    router.post('/updateProductQty', function (req, res) {
        if (req.body.productId == '' || req.body.productId == null || req.body.qty == null) {
            res.json({ success: false, messsage: 'PorductId or qty was not found in post request' });
        }
        else {
            Product.findById(req.body.productId).select().exec(function (err, product) {
                if (err) {
                    res.json({ success: false, message: 'There was an error tyring to get the product by id', err: err });
                }
                else {
                    if (!product) {
                        res.json({ success: false, message: 'Could not find product with request Id' });
                    }
                    else {
                        product.qty = req.body.qty;
                        product.save(function (err, product) {
                            if (err) {
                                res.json({ success: false, message: 'Product could not be updated' });
                            }
                            else {
                                res.json({ success: true, message: 'Product was successful updated', product: product });
                            }
                        });
                    }
                }
            });

        }
    });

    router.post('/deleteCartProduct', function (req, res) {
        //Get cart Id
        //Trying to delete a specific product Id
        //With cart id get 
        if (req.body.cartId == '' || req.body.cartId == null || req.body.productId == '' || req.body.productId == null) {
            res.json({ success: false, message: 'Cart Id and product Id was not found in post body' });
        }
        else {
            Cart.findById(req.body.cartId).select().exec(function (err, cart) {
                if (err) {
                    res.json({ success: false, message: 'There was an error trying to find the cart', err: err });
                }
                else {
                    cart.products.forEach(function (product) {

                        if (product == req.body.productId) {
                            console.log('Before product splice///////////////////////////////////');

                            cart.products.splice(cart.products.indexOf(product), 1);
                            cart.save(function (err, cart) {

                                if (err) {
                                    res.json({ success: false, message: 'There was an error trying to save cart', err: err });
                                }
                                else {
                                    res.json({ success: true, message: 'Cart updated successfully', cart: cart });
                                }
                            });
                        }
                    });
                    // cart.products.findByIdAndRemove(req.body.productId,function(err,oldProduct){
                    //     if(err){
                    //         res.json({success:false,message:'Was not able to remove item from cart'});
                    //     }
                    //     else{
                    //         res.json({success:true,message:'Was able to remove product',product:oldProduct});

                    //     }
                    // })
                }
            });
        }
    });

    router.post('/deleteProduct', function (req, res) {
        if (req.body.productId == '' || req.body.productId == null) {
            res.json({ success: false, message: 'Product Id not found in post body' });
        }
        else {
            Product.findByIdAndRemove(req.body.productId), function (err, oldProduct) {
                if (err) {
                    res.json({ success: false, message: 'There was an error trying to delete the product', err: err })
                }
                else {
                    res.json({ success: true, message: 'Product was successfully deleted', product: oldProduct });
                }
            };
        }
    });


    router.post('/seedProduct', function (req, res) {
        var product = new Product(req.body);

        if (req.body.title == null || req.body.title == '' || req.body.description == null ||
            req.body.description == '' || req.body.price == null || req.body.price == '' || req.body.imagePath == null || req.body.imagePath == '') {
            res.json({ success: false, message: "The uploaded item wasn't set correctly please try again. " });
        }
        else {
            product.save(function (err, newProduct) {
                if (err) {
                    res.json({ success: false, message: err });
                }
                else {
                    if (!product) {
                        res.json({ success: false, message: "Error product could not be added to product catalog" });
                    }
                    else {
                        res.json({ success: true, message: 'Product added to catalog', newProduct });
                    }
                }
            });
        }
    });


    router.get('/startStripePayment', function (req, res) {
        //token
        //chargeamount
        if (req.body.stripeToken == null || req.body.chargAamount == null) {
            res.json({ success: false, message: 'stripeToken or chargeAmount were not included in http post request' });
        }
        else {
            var token = req.body.stripeToken;
            var chargeAmount = req.body.chargeAmount;
            var charge = stripe.charges.create({
                amount: chargeAmount,
                currency: "usd",
                source: token
            }, function (err, charge) {
                if (err && err.type === "StripeCardError") {
                    console.log("your card declined");
                }
                else {
                    console.log(charge);
                }
            })
        }
    });
    router.post('/getCatalogProducts', function (req, res) {
        Product.find({ catalogProduct: true }).select().exec(function (err, catalogProducts) {
            if (err) {
                res.json({ success: false, message: 'There was an error while finding product' });
            }
            else {
                if (!catalogProducts || catalogProducts === undefined || catalogProducts.length == 0) {
                    res.json({ success: false, message: 'Could not find products', noProducts: true });
                }
                else {
                    res.json({ success: true, message: 'Product list successfully returned', catalogProducts: catalogProducts });
                }
            }
        });
    });

    router.post('/getProductCategory', function (req, res) {
        Product.find({ category: req.body.category }).select().exec(function (err, bestsellers) {
            if (err || !bestsellers) {
                res.json({ success: false, message: 'Product list could not be found on server' });
            }
            else {
                res.json({ success: true, message: 'bestsellers incoming', bestsellers: bestsellers });
            }
        });
    });

    router.post('/deleteCart', function (req, res) {
        if (req.body.cartId == '' || req.body.cartId == null) {
            res.json({ success: false, message: 'CartId was not provided for cart deletion' });
        }
        else {
            Cart.findByIdAndRemove(req.body.cartId, function (err, oldCart) {
                oldCart.products.forEach(function (product) {
                    Product.findByIdAndRemove(product, function (err, oldProduct) {
                        console.log('product deleted in cart');
                    });
                });
            });
            //products from the cart and remove them as well
        }
    });

    router.post('/addCartToUser', function (req, res) {
        var cart = new Cart();
        console.log('tried to add cart');
        console.log(req.body);
        cart.save(function (err, userCart) {
            if (err) {
                res.json({ success: false, message: "err" });
            }
            else {
                User.findOneAndUpdate({ email: req.body.userEmail }, { cart: userCart.id }, { new: true }, function (err, user) {
                    if (err) {
                        res.json({ success: false, message: 'this is not it' });

                    }
                    else {
                        res.json({ success: true, message: 'this is it', user: user });

                    }
                    console.log('user hope');
                    console.log(user);
                });
            }
        });

    });

    //Product apis

    router.get('/getProducts', function (req, res) {
        var product = new Product();
        Product.find({}).select('title description pricing imagePath').exec(function (err, products) {
            if (err) {
                res.json({ success: false, message: "Error" });
            } else {
                if (!products) {
                    res.json({ success: false });

                } else {
                    res.json({ success: true, products: products });
                }
            }
        });
    });

    router.get('/getProduct', function (req, res) {
        var product = new Product();
        Product.findById(req.body.productId).select('title description pricing imagePath').exec(function (err, product) {
            if (err) {
                res.json({ success: false, message: "Error, product could not be found on the server" });
            }
            else {
                if (!product) {
                    res.json({ success: false, message: "Error, product could not be found on the server" });
                }
                else {
                    res.json({ success: true, product: product });
                }
            }
        });
    });


    // User apis
    router.get('/getUsers', function (req, res) {
        User.find({}).select('email username permission cart').exec(function (err, users) {
            if (err) {
                res.json({ success: false, message: "User List retrieval failed" });
            }
            else {
                if (!users) {
                    res.json({ success: false, message: 'There are no users' });
                }
                else {
                    res.json({ success: true, users: users });
                }
            }
        });
    });


    router.post('/removeFromCartFromUser', function (req, res) {
        User.findById(req.body.userId).select().exec(function (err, user) {
            if (err || !user) {
                res.json({ success: false, message: 'Could not get cart from user' });
            }
            else {
                res.json({ success: true, user: user });
            }
        });
    });

    router.post('/registerMookie', function (req, res) {
        var user = new User();
        //json body needs username, passowrd, email, name
        user.email = req.body.email;
        user.password = req.body.password;
        user.username = req.body.username;
        user.temporarytoken = jwt.sign({ username: user.username, email: user.email }, secret, { expiresIn: '7d' });
        
        if (req.body.username === null || req.body.username === '' || req.body.password === null || req.body.password === '' ||
            req.body.email === null || req.body.email === '') {
            res.json({ success: false, message: 'Ensure username, email, and password were provided' });
        } else {
            user.save(function (err,user) {
                if (err) {
                    if (err.errors != null) {
                        if (err.errors.email) {
                            res.json({ success: false, message: err.errors.email.message }); // Display error in validation (email)
                        } else if (err.errors.username) {
                            res.json({ success: false, message: err.errors.username.message }); // Display error in validation (username)
                        } else if (err.errors.password) {
                            res.json({ success: false, message: err.errors.password.message }); // Display error in validation (password)
                        }
                        else{
                            res.json({success:false,message:'An Error has ocurred'});
                        }
                    }
                    else if (err) {
                        // Check if duplication error exists
                        if (err.code == 11000) {
                            console.log('line 794');
                            console.log(err);
                            if (err.errmsg[65] == "u") {
                                res.json({ success: false, message: 'That username is already taken' }); // Display error if username already taken
                            } else if (err.errmsg[65] == "e") {
                                res.json({ success: false, message: 'That e-mail is already taken' }); // Display error if e-mail already taken
                            }
                            else{
                                res.json({success:false,message:'An error occurred'});
                            }
                        } else {
                            res.json({ success: false, message: err }); // Display any other error
                        }
                    }
                }
                else {
                    console.log("register successful");
                    res.json({ success: true, message: 'Account registered! Please check your e-mail for activation link.' }); // Send success message back to controller/request
                }
            },function(err){
                console.log('There was an error');
                res.json({success:false,message:'An Error has occurred',err:err});
            });
            console.log('after user');
        }
    });


    router.post('/mookie-login', function (req, res) {
        var login = (req.body.email).toLowerCase();

        User.findOne({ email: req.body.email }).select('email username password active').exec(function (err, user) {
            if (err) {
                if (err.errors != null) {
                    if (err.errors.email) {
                        res.json({ success: false, message: err.errors.email.message }); // Display error in validation (email)
                    } else if (err.errors.password) {
                        res.json({ success: false, message: err.errors.password.message }); // Display error in validation (password)
                    }
                }
                else{
                    // Check if duplication error exists
                    res.json({ success: false, message: err });
                }
            }
            else {
                console.log(err);
                console.log(user);
                if (!user) {
                    res.json({ success: false, message: "Something went wrong, user login failed" });
                }
                else if (user) {
                    if (!req.body.password) {
                        res.json({ success: false, message: 'No password provided' });
                    }
                    else {
                        var validPassword = user.comparePassword(req.body.password);
                        if (!validPassword) {
                            res.json({ success: false, message: 'Incorrect email or password provided' });

                        }
                        else if (!user.active) {
                            res.json({ success: false, message: 'Account is not yet activated. Please activate.' });
                        }
                        else {
                            var token = jwt.sign({ username: user.username, email: user.email }, secret, { expiresIn: '7d' });
                            res.json({ success: true, message: 'User authenticated!', token: token, user: user });
                        }
                    }
                }
            }
        });



    });
    // Route to register new users  
    router.post('/users', function (req, res) {
        var user = new User(); // Create new User object
        user.username = req.body.username; // Save username from request to User object
        user.password = req.body.password; // Save password from request to User object
        user.email = req.body.email; // Save email from request to User object
        user.name = req.body.name; // Save name from request to User object
        user.temporarytoken = jwt.sign({ username: user.username, email: user.email }, secret, { expiresIn: '24h' }); // Create a token for activating account through e-mail

        if (req.body.username === null || req.body.username === '' || req.body.password === null || req.body.password === '' || req.body.email === null || req.body.email === '' || req.body.name === null || req.body.name === '') {
            res.json({ success: false, message: 'Ensure username, email, and password were provided' });
        } else {
            // Save new user to database
            user.save(function (err) {
                if (err) {
                    res.json({ success: false, message: err });
                } else {
                    // Create e-mail object to send to user
                    var email = {
                        from: 'álamode Staff, alamodetechnology@localhost.com',
                        to: [user.email, 'alamodetechnology@gmail.com'],
                        subject: 'Your Activation Link',
                        text: 'Hello ' + user.name + ', thank you for registering at localhost.com. Please click on the following link to complete your activation: http://localhost:8080/activate/' + user.temporarytoken,
                        html: 'Hello<strong> ' + user.name + '</strong>,<br><br>Thank you for registering at localhost.com. Please click on the link below to complete your activation:<br><br><a href="http://localhost:8080/activate/' + user.temporarytoken + '">http://localhost:8080/activate/</a>'
                    };
                    // Function to send e-mail to the user
                    client.sendMail(email, function (err, info) {
                        if (err) {
                            console.log(err); // If error with sending e-mail, log to console/terminal
                        } else {
                            console.log(info); // Log success message to console if sent
                            console.log(user.email); // Display e-mail that it was sent to
                        }
                    });
                    res.json({ success: true, message: 'Account registered! Please check your e-mail for activation link.' }); // Send success message back to controller/request
                }
            });
        }
    });

    // Route to check if username chosen on registration page is taken
    router.post('/checkusername', function (req, res) {
        User.findOne({ username: req.body.username }).select('username').exec(function (err, user) {
            if (err) {
                res.json({ success: false, message: 'Something went wrong. This error has been logged and will be addressed by our staff. We apologize for this inconvenience!' });
            } else {
                if (user) {
                    res.json({ success: false, message: 'That username is already taken' }); // If user is returned, then username is taken
                } else {
                    res.json({ success: true, message: 'Valid username' }); // If user is not returned, then username is not taken
                }
            }
        });
    });

    // Route to check if e-mail chosen on registration page is taken    
    router.post('/checkemail', function (req, res) {
        User.findOne({ email: req.body.email }).select('email').exec(function (err, user) {
            if (err) {
                res.json({ success: false, message: 'Something went wrong. This error has been logged and will be addressed by our staff. We apologize for this inconvenience!' });
            } else {
                if (user) {
                    res.json({ success: false, message: 'That e-mail is already taken' }); // If user is returned, then e-mail is taken
                } else {
                    res.json({ success: true, message: 'Valid e-mail' }); // If user is not returned, then e-mail is not taken
                }
            }
        });
    });

    // Route for user logins
    router.post('/authenticate', function (req, res) {
        var loginUser = (req.body.email).toLowerCase(); // Ensure username is checked in lowercase against database
        User.findOne({ email: loginUser }).select('email username password active').exec(function (err, user) {
            if (err) {
                res.json({ success: false, message: 'Something went wrong. This error has been logged and will be addressed by our staff. We apologize for this inconvenience!' });
            } else {
                // Check if user is found in the database (based on username)           
                if (!user) {
                    res.json({ success: false, message: 'Username not found' }); // Username not found in database
                } else if (user) {
                    // Check if user does exist, then compare password provided by user
                    if (!req.body.password) {
                        res.json({ success: false, message: 'No password provided' }); // Password was not provided
                    } else {
                        var validPassword = user.comparePassword(req.body.password); // Check if password matches password provided by user 
                        if (!validPassword) {
                            res.json({ success: false, message: 'Could not authenticate password' }); // Password does not match password in database
                        } else if (!user.active) {
                            res.json({ success: false, message: 'Account is not yet activated. Please check your e-mail for activation link.', expired: true }); // Account is not activated 
                        } else {
                            var token = jwt.sign({ username: user.username, email: user.email }, secret, { expiresIn: '24h' }); // Logged in: Give user token
                            res.json({ success: true, message: 'User authenticated!', token: token }); // Return token in JSON object to controller
                        }
                    }
                }
            }
        });
    });

    // Route to activate the user's account 
    router.put('/activate/:token', function (req, res) {
        User.findOne({ temporarytoken: req.params.token }, function (err, user) {
            if (err) {
                res.json({ success: false, message: 'Something went wrong. This error has been logged and will be addressed by our staff. We apologize for this inconvenience!' });
            } else {
                var token = req.params.token; // Save the token from URL for verification 
                // Function to verify the user's token
                jwt.verify(token, secret, function (err, decoded) {
                    if (err) {
                        res.json({ success: false, message: 'Activation link has expired.' }); // Token is expired
                    } else if (!user) {
                        res.json({ success: false, message: 'Activation link has expired.' }); // Token may be valid but does not match any user in the database
                    } else {
                        user.temporarytoken = false; // Remove temporary token
                        user.active = true; // Change account status to Activated
                        // Mongoose Method to save user into the database
                        user.save(function (err) {
                            if (err) {
                                console.log(err); // If unable to save user, log error info to console/terminal
                            } else {
                                // If save succeeds, create e-mail object
                                var email = {
                                    from: 'Mookie Dough staff, readus@mookiedough.com',
                                    to: user.email,
                                    subject: 'Account Activated',
                                    text: 'Hello ' + user.name + ', Your account has been successfully activated!',
                                    html: 'Hello<strong> ' + user.name + '</strong>,<br><br>Your account has been successfully activated!'
                                };
                                // Send e-mail object to user
                                client.sendMail(email, function (err, info) {
                                    if (err) console.log(err); // If unable to send e-mail, log error info to console/terminal
                                });
                                res.json({ success: true, message: 'Account activated!' }); // Return success message to controller
                            }
                        });
                    }
                });
            }
        });
    });

    // Route to verify user credentials before re-sending a new activation link 
    router.post('/resend', function (req, res) {
        User.findOne({ username: req.body.username }).select('username password active').exec(function (err, user) {
            if (err) {
                // Create an e-mail object that contains the error. Set to automatically send it to myself for troubleshooting.
                var email = {
                    from: 'álamode Staff, alamodetechnology@gmail.com',
                    to: 'alamodetechnology@gmail.com',
                    subject: 'Error Logged',
                    text: 'The following error has been reported in the MEAN Stack Application: ' + err,
                    html: 'The following error has been reported in the MEAN Stack Application:<br><br>' + err
                };
                // Function to send e-mail to myself
                client.sendMail(email, function (err, info) {
                    if (err) {
                        console.log(err); // If error with sending e-mail, log to console/terminal
                    } else {
                        console.log(info); // Log success message to console if sent
                        console.log(user.email); // Display e-mail that it was sent to
                    }
                });
                res.json({ success: false, message: 'Something went wrong. This error has been logged and will be addressed by our staff. We apologize for this inconvenience!' });
            } else {
                // Check if username is found in database
                if (!user) {
                    res.json({ success: false, message: 'Could not authenticate user' }); // Username does not match username found in database
                } else if (user) {
                    // Check if password is sent in request
                    if (req.body.password) {
                        var validPassword = user.comparePassword(req.body.password); // Password was provided. Now check if matches password in database
                        if (!validPassword) {
                            res.json({ success: false, message: 'Could not authenticate password' }); // Password does not match password found in database
                        } else if (user.active) {
                            res.json({ success: false, message: 'Account is already activated.' }); // Account is already activated
                        } else {
                            res.json({ success: true, user: user });
                        }
                    } else {
                        res.json({ success: false, message: 'No password provided' }); // No password was provided
                    }
                }
            }
        });
    });

    // Route to send user a new activation link once credentials have been verified
    router.put('/resend', function (req, res) {
        User.findOne({ username: req.body.username }).select('username name email temporarytoken').exec(function (err, user) {
            if (err) {
                // Create an e-mail object that contains the error. Set to automatically send it to myself for troubleshooting.
                var email = {
                    from: 'álamode Staff, alamodetechnology@gmail.com',
                    to: 'alamodetechnology@gmail.com',
                    subject: 'Error Logged',
                    text: 'The following error has been reported in the MEAN Stack Application: ' + err,
                    html: 'The following error has been reported in the MEAN Stack Application:<br><br>' + err
                };
                // Function to send e-mail to myself
                client.sendMail(email, function (err, info) {
                    if (err) {
                        console.log(err); // If error with sending e-mail, log to console/terminal
                    } else {
                        console.log(info); // Log success message to console if sent
                        console.log(user.email); // Display e-mail that it was sent to
                    }
                });
                res.json({ success: false, message: 'Something went wrong. This error has been logged and will be addressed by our staff. We apologize for this inconvenience!' });
            } else {
                user.temporarytoken = jwt.sign({ username: user.username, email: user.email }, secret, { expiresIn: '24h' }); // Give the user a new token to reset password
                // Save user's new token to the database
                user.save(function (err) {
                    if (err) {
                        console.log(err); // If error saving user, log it to console/terminal
                    } else {
                        // If user successfully saved to database, create e-mail object
                        var email = {
                            from: 'álamode Staff, alamodetechnology@gmail.com',
                            to: user.email,
                            subject: 'Activation Link Request',
                            text: 'Hello ' + user.name + ', You recently requested a new account activation link. Please click on the following link to complete your activation: https://immense-dusk-71112.herokuapp.com/activate/' + user.temporarytoken,
                            html: 'Hello<strong> ' + user.name + '</strong>,<br><br>You recently requested a new account activation link. Please click on the link below to complete your activation:<br><br><a href="http://www.herokutestapp3z24.com/activate/' + user.temporarytoken + '">http://www.herokutestapp3z24.com/activate/</a>'
                        };
                        // Function to send e-mail to user
                        client.sendMail(email, function (err, info) {
                            if (err) console.log(err); // If error in sending e-mail, log to console/terminal
                        });
                        res.json({ success: true, message: 'Activation link has been sent to ' + user.email + '!' }); // Return success message to controller
                    }
                });
            }
        });
    });



    // Route to send user's username to e-mail
    router.get('/resetusername/:email', function (req, res) {
        User.findOne({ email: req.params.email }).select('email name username').exec(function (err, user) {
            if (err) {
                res.json({ success: false, message: err }); // Error if cannot connect
            } else {
                if (!user) {
                    res.json({ success: false, message: 'E-mail was not found' }); // Return error if e-mail cannot be found in database
                } else {
                    // If e-mail found in database, create e-mail object
                    var email = {
                        from: 'álamode Staff, alamodetechnology@gmail.com',
                        to: user.email,
                        subject: 'Localhost Username Request',
                        text: 'Hello ' + user.name + ', You recently requested your username. Please save it in your files: ' + user.username,
                        html: 'Hello<strong> ' + user.name + '</strong>,<br><br>You recently requested your username. Please save it in your files: ' + user.username
                    };

                    // Function to send e-mail to user
                    client.sendMail(email, function (err, info) {
                        if (err) {
                            console.log(err); // If error in sending e-mail, log to console/terminal
                        } else {
                            console.log(info); // Log confirmation to console
                        }
                    });
                    res.json({ success: true, message: 'Username has been sent to e-mail! ' }); // Return success message once e-mail has been sent
                }
            }
        });
    });

    // Route to send reset link to the user
    router.put('/resetpassword', function (req, res) {
        User.findOne({ username: req.body.username }).select('username active email resettoken name').exec(function (err, user) {
            if (err) {
                // Create an e-mail object that contains the error. Set to automatically send it to myself for troubleshooting.
                var email = {
                    from: 'álamode Staff, alamodetechnology@gmail.com',
                    to: 'alamodetechnology@gmail.com',
                    subject: 'Error Logged',
                    text: 'The following error has been reported in the MEAN Stack Application: ' + err,
                    html: 'The following error has been reported in the MEAN Stack Application:<br><br>' + err
                };
                // Function to send e-mail to myself
                client.sendMail(email, function (err, info) {
                    if (err) {
                        console.log(err); // If error with sending e-mail, log to console/terminal
                    } else {
                        console.log(info); // Log success message to console if sent
                        console.log(user.email); // Display e-mail that it was sent to
                    }
                });
                res.json({ success: false, message: 'Something went wrong. This error has been logged and will be addressed by our staff. We apologize for this inconvenience!' });
            } else {
                if (!user) {
                    res.json({ success: false, message: 'Username was not found' }); // Return error if username is not found in database
                } else if (!user.active) {
                    res.json({ success: false, message: 'Account has not yet been activated' }); // Return error if account is not yet activated
                } else {
                    user.resettoken = jwt.sign({ username: user.username, email: user.email }, secret, { expiresIn: '24h' }); // Create a token for activating account through e-mail
                    // Save token to user in database
                    user.save(function (err) {
                        if (err) {
                            res.json({ success: false, message: err }); // Return error if cannot connect
                        } else {
                            // Create e-mail object to send to user
                            var email = {
                                from: 'álamode Staff, alamodetechnology@gmail.com',
                                to: user.email,
                                subject: 'Reset Password Request',
                                text: 'Hello ' + user.name + ', You recently request a password reset link. Please click on the link below to reset your password:<br><br><a href="http://www.herokutestapp3z24.com/reset/' + user.resettoken,
                                html: 'Hello<strong> ' + user.name + '</strong>,<br><br>You recently request a password reset link. Please click on the link below to reset your password:<br><br><a href="http://www.herokutestapp3z24.com/reset/' + user.resettoken + '">http://www.herokutestapp3z24.com/reset/</a>'
                            };
                            // Function to send e-mail to the user
                            client.sendMail(email, function (err, info) {
                                if (err) {
                                    console.log(err); // If error with sending e-mail, log to console/terminal
                                } else {
                                    console.log(info); // Log success message to console
                                    console.log('sent to: ' + user.email); // Log e-mail 
                                }
                            });
                            res.json({ success: true, message: 'Please check your e-mail for password reset link' }); // Return success message
                        }
                    });
                }
            }
        });
    });

    // Route to verify user's e-mail activation link
    router.get('/resetpassword/:token', function (req, res) {
        User.findOne({ resettoken: req.params.token }).select().exec(function (err, user) {
            if (err) {
                // Create an e-mail object that contains the error. Set to automatically send it to myself for troubleshooting.
                var email = {
                    from: 'álamode Staff, alamodetechnology@gmail.com',
                    to: 'gugui3z24@gmail.com',
                    subject: 'Error Logged',
                    text: 'The following error has been reported in the MEAN Stack Application: ' + err,
                    html: 'The following error has been reported in the MEAN Stack Application:<br><br>' + err
                };
                // Function to send e-mail to myself
                client.sendMail(email, function (err, info) {
                    if (err) {
                        console.log(err); // If error with sending e-mail, log to console/terminal
                    } else {
                        console.log(info); // Log success message to console if sent
                        console.log(user.email); // Display e-mail that it was sent to
                    }
                });
                res.json({ success: false, message: 'Something went wrong. This error has been logged and will be addressed by our staff. We apologize for this inconvenience!' });
            } else {
                var token = req.params.token; // Save user's token from parameters to variable
                // Function to verify token
                jwt.verify(token, secret, function (err, decoded) {
                    if (err) {
                        res.json({ success: false, message: 'Password link has expired' }); // Token has expired or is invalid
                    } else {
                        if (!user) {
                            res.json({ success: false, message: 'Password link has expired' }); // Token is valid but not no user has that token anymore
                        } else {
                            res.json({ success: true, user: user }); // Return user object to controller
                        }
                    }
                });
            }
        });
    });

    // Save user's new password to database
    router.put('/savepassword', function (req, res) {
        User.findOne({ username: req.body.username }).select('username email name password resettoken').exec(function (err, user) {
            if (err) {
                // Create an e-mail object that contains the error. Set to automatically send it to myself for troubleshooting.
                var email = {
                    from: 'álamode Staff, alamodetechnology@gmail.com',
                    to: 'alamodetechnology@gmail.com',
                    subject: 'Error Logged',
                    text: 'The following error has been reported in the MEAN Stack Application: ' + err,
                    html: 'The following error has been reported in the MEAN Stack Application:<br><br>' + err
                };
                // Function to send e-mail to myself
                client.sendMail(email, function (err, info) {
                    if (err) {
                        console.log(err); // If error with sending e-mail, log to console/terminal
                    } else {
                        console.log(info); // Log success message to console if sent
                        console.log(user.email); // Display e-mail that it was sent to
                    }
                });
                res.json({ success: false, message: 'Something went wrong. This error has been logged and will be addressed by our staff. We apologize for this inconvenience!' });
            } else {
                if (req.body.password === null || req.body.password === '') {
                    res.json({ success: false, message: 'Password not provided' });
                } else {
                    user.password = req.body.password; // Save user's new password to the user object
                    user.resettoken = false; // Clear user's resettoken 
                    // Save user's new data
                    user.save(function (err) {
                        if (err) {
                            res.json({ success: false, message: err });
                        } else {
                            // Create e-mail object to send to user
                            var email = {
                                from: 'álamode Staff, alamodetechnology@gmail.com',
                                to: user.email,
                                subject: 'Password Recently Reset',
                                text: 'Hello ' + user.name + ', This e-mail is to notify you that your password was recently reset at localhost.com',
                                html: 'Hello<strong> ' + user.name + '</strong>,<br><br>This e-mail is to notify you that your password was recently reset at localhost.com'
                            };
                            // Function to send e-mail to the user
                            client.sendMail(email, function (err, info) {
                                if (err) console.log(err); // If error with sending e-mail, log to console/terminal
                            });
                            res.json({ success: true, message: 'Password has been reset!' }); // Return success message
                        }
                    });
                }
            }
        });
    });

    // Middleware for Routes that checks for token - Place all routes after this route that require the user to already be logged in
    router.use(function (req, res, next) {
        var token = req.body.token || req.body.query || req.headers['x-access-token']; // Check for token in body, URL, or headers

        // Check if token is valid and not expired  
        if (token) {
            // Function to verify token
            jwt.verify(token, secret, function (err, decoded) {
                if (err) {
                    res.json({ success: false, message: 'Token invalid' }); // Token has expired or is invalid
                } else {
                    req.decoded = decoded; // Assign to req. variable to be able to use it in next() route ('/me' route)
                    next(); // Required to leave middleware
                }
            });
        } else {
            res.json({ success: false, message: 'No token provided' }); // Return error if no token was provided in the request
        }
    });

    // Route to get the currently logged in user    
    router.post('/me', function (req, res) {
        console.log(req.decoded);
        res.send(req.decoded); // Return the token acquired from middleware
    });

    // Route to provide the user with a new token to renew session
    router.get('/renewToken/:username', function (req, res) {
        User.findOne({ username: req.params.username }).select('username email').exec(function (err, user) {
            if (err) {
                // Create an e-mail object that contains the error. Set to automatically send it to myself for troubleshooting.
                var email = {
                    from: 'álamode Staff, alamodetechnology@gmail.com',
                    to: 'alamodetechnology@gmail.com',
                    subject: 'Error Logged',
                    text: 'The following error has been reported in the MEAN Stack Application: ' + err,
                    html: 'The following error has been reported in the MEAN Stack Application:<br><br>' + err
                };
                // Function to send e-mail to myself
                client.sendMail(email, function (err, info) {
                    if (err) {
                        console.log(err); // If error with sending e-mail, log to console/terminal
                    } else {
                        console.log(info); // Log success message to console if sent
                        console.log(user.email); // Display e-mail that it was sent to
                    }
                });
                res.json({ success: false, message: 'Something went wrong. This error has been logged and will be addressed by our staff. We apologize for this inconvenience!' });
            } else {
                // Check if username was found in database
                if (!user) {
                    res.json({ success: false, message: 'No user was found' }); // Return error
                } else {
                    var newToken = jwt.sign({ username: user.username, email: user.email }, secret, { expiresIn: '24h' }); // Give user a new token
                    res.json({ success: true, token: newToken }); // Return newToken in JSON object to controller
                }
            }
        });
    });

    // Route to get the current user's permission level
    router.get('/permission', function (req, res) {
        console.log(req.decoded);
        User.findOne({ username: req.decoded.username }, function (err, user) {
            if (err) {
                res.json({ success: false, message: 'Something went wrong. This error has been logged and will be addressed by our staff. We apologize for this inconvenience!' });
            } else {
                // Check if username was found in database
                if (!user) {
                    res.json({ success: false, message: 'No user was found' }); // Return an error
                } else {
                    res.json({ success: true, permission: user.permission }); // Return the user's permission
                }
            }
        });
    });

    // Route to get all users for management page
    router.get('/management', function (req, res) {
        User.find({}, function (err, users) {
            if (err) {
                // Create an e-mail object that contains the error. Set to automatically send it to myself for troubleshooting.
                var email = {
                    from: 'álamode Staff, alamodetechnology@gmail.com',
                    to: 'alamodetechnology@gmail.com',
                    subject: 'Error Logged',
                    text: 'The following error has been reported in the MEAN Stack Application: ' + err,
                    html: 'The following error has been reported in the MEAN Stack Application:<br><br>' + err
                };
                // Function to send e-mail to myself
                client.sendMail(email, function (err, info) {
                    if (err) {
                        console.log(err); // If error with sending e-mail, log to console/terminal
                    } else {
                        console.log(info); // Log success message to console if sent
                        console.log(user.email); // Display e-mail that it was sent to
                    }
                });
                res.json({ success: false, message: 'Something went wrong. This error has been logged and will be addressed by our staff. We apologize for this inconvenience!' });
            } else {
                User.findOne({ username: req.decoded.username }, function (err, mainUser) {
                    if (err) {
                        // Create an e-mail object that contains the error. Set to automatically send it to myself for troubleshooting.
                        var email = {
                            from: 'álamode Staff, alamodetechnology@gmail.com',
                            to: 'alamodetechnology@gmail.com',
                            subject: 'Error Logged',
                            text: 'The following error has been reported in the MEAN Stack Application: ' + err,
                            html: 'The following error has been reported in the MEAN Stack Application:<br><br>' + err
                        };
                        // Function to send e-mail to myself
                        client.sendMail(email, function (err, info) {
                            if (err) {
                                console.log(err); // If error with sending e-mail, log to console/terminal
                            } else {
                                console.log(info); // Log success message to console if sent
                                console.log(user.email); // Display e-mail that it was sent to
                            }
                        });
                        res.json({ success: false, message: 'Something went wrong. This error has been logged and will be addressed by our staff. We apologize for this inconvenience!' });
                    } else {
                        // Check if logged in user was found in database
                        if (!mainUser) {
                            res.json({ success: false, message: 'No user found' }); // Return error
                        } else {
                            // Check if user has editing/deleting privileges 
                            if (mainUser.permission === 'admin' || mainUser.permission === 'moderator') {
                                // Check if users were retrieved from database
                                if (!users) {
                                    res.json({ success: false, message: 'Users not found' }); // Return error
                                } else {
                                    res.json({ success: true, users: users, permission: mainUser.permission }); // Return users, along with current user's permission
                                }
                            } else {
                                res.json({ success: false, message: 'Insufficient Permissions' }); // Return access error
                            }
                        }
                    }
                });
            }
        });
    });

    // Route to delete a user
    router.delete('/management/:username', function (req, res) {
        var deletedUser = req.params.username; // Assign the username from request parameters to a variable
        User.findOne({ username: req.decoded.username }, function (err, mainUser) {
            if (err) {
                res.json({ success: false, message: 'Something went wrong. This error has been logged and will be addressed by our staff. We apologize for this inconvenience!' });
            } else {
                // Check if current user was found in database
                if (!mainUser) {
                    res.json({ success: false, message: 'No user found' }); // Return error
                } else {
                    // Check if curent user has admin access
                    if (mainUser.permission !== 'admin') {
                        res.json({ success: false, message: 'Insufficient Permissions' }); // Return error
                    } else {
                        // Fine the user that needs to be deleted
                        User.findOneAndRemove({ username: deletedUser }, function (err, user) {
                            if (err) {
                                res.json({ success: false, message: 'Something went wrong. This error has been logged and will be addressed by our staff. We apologize for this inconvenience!' });
                            } else {
                                res.json({ success: true }); // Return success status
                            }
                        });
                    }
                }
            }
        });
    });

    // Route to get the user that needs to be edited
    router.get('/edit/:id', function (req, res) {
        var editUser = req.params.id; // Assign the _id from parameters to variable
        User.findOne({ username: req.decoded.username }, function (err, mainUser) {
            if (err) {
                // Create an e-mail object that contains the error. Set to automatically send it to myself for troubleshooting.
                var email = {
                    from: 'álamode Staff, alamodetechnology@gmail.com',
                    to: 'alamodetechnology@gmail.com',
                    subject: 'Error Logged',
                    text: 'The following error has been reported in the MEAN Stack Application: ' + err,
                    html: 'The following error has been reported in the MEAN Stack Application:<br><br>' + err
                };
                // Function to send e-mail to myself
                client.sendMail(email, function (err, info) {
                    if (err) {
                        console.log(err); // If error with sending e-mail, log to console/terminal
                    } else {
                        console.log(info); // Log success message to console if sent
                        console.log(user.email); // Display e-mail that it was sent to
                    }
                });
                res.json({ success: false, message: 'Something went wrong. This error has been logged and will be addressed by our staff. We apologize for this inconvenience!' });
            } else {
                // Check if logged in user was found in database
                if (!mainUser) {
                    res.json({ success: false, message: 'No user found' }); // Return error
                } else {
                    // Check if logged in user has editing privileges
                    if (mainUser.permission === 'admin' || mainUser.permission === 'moderator') {
                        // Find the user to be editted
                        User.findOne({ _id: editUser }, function (err, user) {
                            if (err) {
                                // Create an e-mail object that contains the error. Set to automatically send it to myself for troubleshooting.
                                var email = {
                                    from: 'álamode Staff, alamodetechnology@gmail.com',
                                    to: 'alamodetechnology@gmail.com',
                                    subject: 'Error Logged',
                                    text: 'The following error has been reported in the MEAN Stack Application: ' + err,
                                    html: 'The following error has been reported in the MEAN Stack Application:<br><br>' + err
                                };
                                // Function to send e-mail to myself
                                client.sendMail(email, function (err, info) {
                                    if (err) {
                                        console.log(err); // If error with sending e-mail, log to console/terminal
                                    } else {
                                        console.log(info); // Log success message to console if sent
                                        console.log(user.email); // Display e-mail that it was sent to
                                    }
                                });
                                res.json({ success: false, message: 'Something went wrong. This error has been logged and will be addressed by our staff. We apologize for this inconvenience!' });
                            } else {
                                // Check if user to edit is in database
                                if (!user) {
                                    res.json({ success: false, message: 'No user found' }); // Return error
                                } else {
                                    res.json({ success: true, user: user }); // Return the user to be editted
                                }
                            }
                        });
                    } else {
                        res.json({ success: false, message: 'Insufficient Permission' }); // Return access error
                    }
                }
            }
        });
    });

    // Route to update/edit a user
    router.put('/edit', function (req, res) {
        var editUser = req.body._id; // Assign _id from user to be editted to a variable
        if (req.body.name) var newName = req.body.name; // Check if a change to name was requested
        if (req.body.username) var newUsername = req.body.username; // Check if a change to username was requested
        if (req.body.email) var newEmail = req.body.email; // Check if a change to e-mail was requested
        if (req.body.permission) var newPermission = req.body.permission; // Check if a change to permission was requested
        // Look for logged in user in database to check if have appropriate access
        User.findOne({ username: req.decoded.username }, function (err, mainUser) {
            if (err) {
                // Create an e-mail object that contains the error. Set to automatically send it to myself for troubleshooting.
                var email = {
                    from: 'álamode Staff, alamodetechnology@gmail.com',
                    to: 'alamodetechnology@gmail.com',
                    subject: 'Error Logged',
                    text: 'The following error has been reported in the MEAN Stack Application: ' + err,
                    html: 'The following error has been reported in the MEAN Stack Application:<br><br>' + err
                };
                // Function to send e-mail to myself
                client.sendMail(email, function (err, info) {
                    if (err) {
                        console.log(err); // If error with sending e-mail, log to console/terminal
                    } else {
                        console.log(info); // Log success message to console if sent
                        console.log(user.email); // Display e-mail that it was sent to
                    }
                });
                res.json({ success: false, message: 'Something went wrong. This error has been logged and will be addressed by our staff. We apologize for this inconvenience!' });
            } else {
                // Check if logged in user is found in database
                if (!mainUser) {
                    res.json({ success: false, message: "no user found" }); // Return error
                } else {
                    // Check if a change to name was requested
                    if (newName) {
                        // Check if person making changes has appropriate access
                        if (mainUser.permission === 'admin' || mainUser.permission === 'moderator') {
                            // Look for user in database
                            User.findOne({ _id: editUser }, function (err, user) {
                                if (err) {
                                    // Create an e-mail object that contains the error. Set to automatically send it to myself for troubleshooting.
                                    var email = {
                                        from: 'álamode Staff, alamodetechnology@gmail.com',
                                        to: 'alamodetechnology@gmail.com',
                                        subject: 'Error Logged',
                                        text: 'The following error has been reported in the MEAN Stack Application: ' + err,
                                        html: 'The following error has been reported in the MEAN Stack Application:<br><br>' + err
                                    };
                                    // Function to send e-mail to myself
                                    client.sendMail(email, function (err, info) {
                                        if (err) {
                                            console.log(err); // If error with sending e-mail, log to console/terminal
                                        } else {
                                            console.log(info); // Log success message to console if sent
                                            console.log(user.email); // Display e-mail that it was sent to
                                        }
                                    });
                                    res.json({ success: false, message: 'Something went wrong. This error has been logged and will be addressed by our staff. We apologize for this inconvenience!' });
                                } else {
                                    // Check if user is in database
                                    if (!user) {
                                        res.json({ success: false, message: 'No user found' }); // Return error
                                    } else {
                                        user.name = newName; // Assign new name to user in database
                                        // Save changes
                                        user.save(function (err) {
                                            if (err) {
                                                console.log(err); // Log any errors to the console
                                            } else {
                                                res.json({ success: true, message: 'Name has been updated!' }); // Return success message
                                            }
                                        });
                                    }
                                }
                            });
                        } else {
                            res.json({ success: false, message: 'Insufficient Permissions' }); // Return error
                        }
                    }

                    // Check if a change to username was requested
                    if (newUsername) {
                        // Check if person making changes has appropriate access
                        if (mainUser.permission === 'admin' || mainUser.permission === 'moderator') {
                            // Look for user in database
                            User.findOne({ _id: editUser }, function (err, user) {
                                if (err) {
                                    // Create an e-mail object that contains the error. Set to automatically send it to myself for troubleshooting.
                                    var email = {
                                        from: 'álamode Staff, alamodetechnology@gmail.com',
                                        to: 'alamodetechnology@gmail.com',
                                        subject: 'Error Logged',
                                        text: 'The following error has been reported in the MEAN Stack Application: ' + err,
                                        html: 'The following error has been reported in the MEAN Stack Application:<br><br>' + err
                                    };
                                    // Function to send e-mail to myself
                                    client.sendMail(email, function (err, info) {
                                        if (err) {
                                            console.log(err); // If error with sending e-mail, log to console/terminal
                                        } else {
                                            console.log(info); // Log success message to console if sent
                                            console.log(user.email); // Display e-mail that it was sent to
                                        }
                                    });
                                    res.json({ success: false, message: 'Something went wrong. This error has been logged and will be addressed by our staff. We apologize for this inconvenience!' });
                                } else {
                                    // Check if user is in database
                                    if (!user) {
                                        res.json({ success: false, message: 'No user found' }); // Return error
                                    } else {
                                        user.username = newUsername; // Save new username to user in database
                                        // Save changes
                                        user.save(function (err) {
                                            if (err) {
                                                console.log(err); // Log error to console
                                            } else {
                                                res.json({ success: true, message: 'Username has been updated' }); // Return success
                                            }
                                        });
                                    }
                                }
                            });
                        } else {
                            res.json({ success: false, message: 'Insufficient Permissions' }); // Return error
                        }
                    }

                    // Check if change to e-mail was requested
                    if (newEmail) {
                        // Check if person making changes has appropriate access
                        if (mainUser.permission === 'admin' || mainUser.permission === 'moderator') {
                            // Look for user that needs to be editted
                            User.findOne({ _id: editUser }, function (err, user) {
                                if (err) {
                                    // Create an e-mail object that contains the error. Set to automatically send it to myself for troubleshooting.
                                    var email = {
                                        from: 'álamode Staff, alamodetechnology@gmail.com',
                                        to: 'alamodetechnology@gmail.com',
                                        subject: 'Error Logged',
                                        text: 'The following error has been reported in the MEAN Stack Application: ' + err,
                                        html: 'The following error has been reported in the MEAN Stack Application:<br><br>' + err
                                    };
                                    // Function to send e-mail to myself
                                    client.sendMail(email, function (err, info) {
                                        if (err) {
                                            console.log(err); // If error with sending e-mail, log to console/terminal
                                        } else {
                                            console.log(info); // Log success message to console if sent
                                            console.log(user.email); // Display e-mail that it was sent to
                                        }
                                    });
                                    res.json({ success: false, message: 'Something went wrong. This error has been logged and will be addressed by our staff. We apologize for this inconvenience!' });
                                } else {
                                    // Check if logged in user is in database
                                    if (!user) {
                                        res.json({ success: false, message: 'No user found' }); // Return error
                                    } else {
                                        user.email = newEmail; // Assign new e-mail to user in databse
                                        // Save changes
                                        user.save(function (err) {
                                            if (err) {
                                                console.log(err); // Log error to console
                                            } else {
                                                res.json({ success: true, message: 'E-mail has been updated' }); // Return success
                                            }
                                        });
                                    }
                                }
                            });
                        } else {
                            res.json({ success: false, message: 'Insufficient Permissions' }); // Return error
                        }
                    }

                    // Check if a change to permission was requested
                    if (newPermission) {
                        // Check if user making changes has appropriate access
                        if (mainUser.permission === 'admin' || mainUser.permission === 'moderator') {
                            // Look for user to edit in database
                            User.findOne({ _id: editUser }, function (err, user) {
                                if (err) {
                                    // Create an e-mail object that contains the error. Set to automatically send it to myself for troubleshooting.
                                    var email = {
                                        from: 'álamode Staff, alamodetechnology@gmail.com',
                                        to: 'alamodetechnology@gmail.com',
                                        subject: 'Error Logged',
                                        text: 'The following error has been reported in the MEAN Stack Application: ' + err,
                                        html: 'The following error has been reported in the MEAN Stack Application:<br><br>' + err
                                    };
                                    // Function to send e-mail to myself
                                    client.sendMail(email, function (err, info) {
                                        if (err) {
                                            console.log(err); // If error with sending e-mail, log to console/terminal
                                        } else {
                                            console.log(info); // Log success message to console if sent
                                            console.log(user.email); // Display e-mail that it was sent to
                                        }
                                    });
                                    res.json({ success: false, message: 'Something went wrong. This error has been logged and will be addressed by our staff. We apologize for this inconvenience!' });
                                } else {
                                    // Check if user is found in database
                                    if (!user) {
                                        res.json({ success: false, message: 'No user found' }); // Return error
                                    } else {
                                        // Check if attempting to set the 'user' permission
                                        if (newPermission === 'user') {
                                            // Check the current permission is an admin
                                            if (user.permission === 'admin') {
                                                // Check if user making changes has access
                                                if (mainUser.permission !== 'admin') {
                                                    res.json({ success: false, message: 'Insufficient Permissions. You must be an admin to downgrade an admin.' }); // Return error
                                                } else {
                                                    user.permission = newPermission; // Assign new permission to user
                                                    // Save changes
                                                    user.save(function (err) {
                                                        if (err) {
                                                            console.log(err); // Long error to console
                                                        } else {
                                                            res.json({ success: true, message: 'Permissions have been updated!' }); // Return success
                                                        }
                                                    });
                                                }
                                            } else {
                                                user.permission = newPermission; // Assign new permission to user
                                                // Save changes
                                                user.save(function (err) {
                                                    if (err) {
                                                        console.log(err); // Log error to console
                                                    } else {
                                                        res.json({ success: true, message: 'Permissions have been updated!' }); // Return success
                                                    }
                                                });
                                            }
                                        }
                                        // Check if attempting to set the 'moderator' permission
                                        if (newPermission === 'moderator') {
                                            // Check if the current permission is 'admin'
                                            if (user.permission === 'admin') {
                                                // Check if user making changes has access
                                                if (mainUser.permission !== 'admin') {
                                                    res.json({ success: false, message: 'Insufficient Permissions. You must be an admin to downgrade another admin' }); // Return error
                                                } else {
                                                    user.permission = newPermission; // Assign new permission
                                                    // Save changes
                                                    user.save(function (err) {
                                                        if (err) {
                                                            console.log(err); // Log error to console
                                                        } else {
                                                            res.json({ success: true, message: 'Permissions have been updated!' }); // Return success
                                                        }
                                                    });
                                                }
                                            } else {
                                                user.permission = newPermission; // Assign new permssion
                                                // Save changes
                                                user.save(function (err) {
                                                    if (err) {
                                                        console.log(err); // Log error to console
                                                    } else {
                                                        res.json({ success: true, message: 'Permissions have been updated!' }); // Return success
                                                    }
                                                });
                                            }
                                        }

                                        // Check if assigning the 'admin' permission
                                        if (newPermission === 'admin') {
                                            // Check if logged in user has access
                                            if (mainUser.permission === 'admin') {
                                                user.permission = newPermission; // Assign new permission
                                                // Save changes
                                                user.save(function (err) {
                                                    if (err) {
                                                        console.log(err); // Log error to console
                                                    } else {
                                                        res.json({ success: true, message: 'Permissions have been updated!' }); // Return success
                                                    }
                                                });
                                            } else {
                                                res.json({ success: false, message: 'Insufficient Permissions. You must be an admin to upgrade someone to the admin level' }); // Return error
                                            }
                                        }
                                    }
                                }
                            });
                        } else {
                            res.json({ success: false, message: 'Insufficient Permissions' }); // Return error
                        }
                    }
                }
            }
        });
    });

    return router; // Return the router object to server
};