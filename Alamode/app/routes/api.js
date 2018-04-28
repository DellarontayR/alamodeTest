'use strict';
// Mongoose Models
var User = require('../models/user'); // Import User Model
var Product = require('../models/product');
var Cart = require('../models/cart');
var Subscription = require('../models/subscription');
var ContactMessage = require('../models/contactmessage');
var SiteVisit = require('../models/sitevisit');
var Order = require('../models/order');
var Receipt = require('../models/receipt');
var ReceiptCounter = require('../models/receiptcounter');
var Inventory = require('../models/inventory');
var DeliverySchedule = require('../models/deliveryschedule');

// Libs
var jwt = require('jsonwebtoken'); // Import JWT Package
var secret = 'zm!_0@0hu_7&ii-@j&0wpm3t%ojnvmjx6j0!1*&j@x51&mdzk@'; // Create custom secret for use in JWT
var nodemailer = require('nodemailer'); // Import Nodemailer Package
var xoauth2 = require('xoauth2');
var twilio = require('twilio');
var twilioClient = new twilio('ACf3ae9f0709c19efe2b96fd5ba3d3c854', '7ca3bc06e1cbc968d80c1bc44fda2212');
var emailValidator = require("email-validator");


var stripe = require('stripe')('sk_test_N3kcDk7Gi6QdJewLusdBT2Tc');
//google maps api key AIzaSyDaah9NRImsLSSwF3KhofpShgf9tt26lDA
//The actual google maps api key AIzaSyBPVL49OMjEcc82nQlsobcNmr9j9ZBDTHE
// nodemailer is secure from here along with stripe and other apis

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;

module.exports = function (router) {

    // Create delivery schedule

    // id 5adf85eb04afbfbff4a7751b
    // var schedule = new DeliverySchedule();
    // schedule.startHour = 8;
    // schedule.endHour = 19;
    // schedule.save(function(err,newSchedule){
    //     if(err|| !newSchedule){
    //         console.log(err);
    //     }
    //     else{
    //         console.log(newSchedule);
    //     }
    // });

    // Returns whether or not delivery is currently available
    router.post('/checkOrderingSchedule', function (req, res) {
        var scheduleId = '5adf85eb04afbfbff4a7751b';
        DeliverySchedule.findById(scheduleId).exec(function (err, schedule) {
            if (err || !schedule) {
                res.json({ success: false, message: 'Could not today\'s schedule', err: err });
            }
            else {
                res.json({ success: true, message: 'Schedule found', schedule: schedule });
            }
        });
    });


    // Handle Inventory
    // Remove an invenory Item
    router.post('/removeInventoryUpdate', function (req, res) {
        var inventoryId = '5ae3d64ef729f01ce2a747b5';
        if (req.body.itemId === null || req.body.itemId === '') {
            res.json({ success: false, message: 'There was an error trying to remove the inventory update' });
        }
        else {
            Inventory.findById(inventoryId).exec(function (err, inventory) {
                if (err || !inventory) {
                    res.json({ success: false, message: 'There was an error while trying to get the inventory' });
                }
                else {
                    inventory.itemInventory.remove({ _id: req.body.itemId });
                    inventory.save(function (err, newInventory) {
                        if (err || !newInventory) {
                            res.json({ success: false, message: 'There was an error while trying to update inventory', err: err });
                        }
                        else {
                            res.json({ success: true, message: 'Inventory Updated successfully', inventory: newInventory });
                        }
                    });

                }
            });

        }
    });
    // >
    // Update a new Inventory record
    router.post('/updateInventory', function (req, res) {
        var inventoryId = '5ae3d64ef729f01ce2a747b5';
        if (req.body.itemName === null || req.body.itemName === '' || req.body.itemPrice === null || req.body.itemQty === null) {
            res.json({ sucess: false, message: 'Correct inventory schema not sent' });
        }
        else {
            Inventory.findById(inventoryId).exec(function (err, inventory) {
                if (err || !inventory) {
                    res.json({ success: false, message: 'Inventory was not found successfully', err: err, inventory: inventory });
                }
                else {
                    var newInventoryItem = {};
                    newInventoryItem.itemName = req.body.itemName;
                    newInventoryItem.itemPrice = req.body.itemPrice;
                    newInventoryItem.itemQty = req.body.itemQty;
                    if (req.body.oldInventory === 'true') {
                        newInventoryItem.oldInventory = true;
                    }
                    inventory.itemInventory.push(newInventoryItem);
                    inventory.save(function (err, newInventory) {
                        if (err || !newInventory) {
                            res.json({ success: false, message: 'New inventory could not be saved', err: err, inventory: newInventory });
                        }
                        else {
                            res.json({ success: true, message: 'Item added to inventory successfully', inventory: newInventory });
                        }
                    });
                }
            }, function (err) {
                res.json({ success: false, message: 'There was some other error', err: err });
            });
        }
    });
    // >
    // Get Inventory
    router.post('/getInventory', function (req, res) {
        var inventoryId = '5ae3d64ef729f01ce2a747b5';

        Inventory.findById(inventoryId).exec(function (err, inventory) {
            if (err || !inventory) {
                res.json({ success: false, message: 'An error occured while trying to retrive inventory', err: err, inventory: inventory });
            }
            else {
                res.json({ success: true, message: 'Inventory found successfully', inventory: inventory });
            }
        });
    });
    // >
    // Create Inventory
    // var inventory = new Inventory();
    // inventory.save(function(err,newInventory){
    //     if(err || !newInventory){
    //         console.log(err);
    //         console.log(newInventory);
    //     }
    //     else{
    //         console.log(newInventory);
    //     }
    // });
    // >

    // Receipt Counter 
    // Create receipt counter
    // var counter = new ReceiptCounter();
    // counter.save(function(err,Counter){
    //     if(err){
    //         console.log(err);
    //     }
    //     else{
    //         console.log(Counter);
    //     }
    // });
    // >

    // Donation api endpoint
    router.post('/donate', function (req, res) {
        if (req.body.token == null || req.body.name == null || req.body.donationAmount == null) {
            res.json({ success: false, message: "Sorry we had a problem on our end. Please try to donate again later" });
        }
    });
    // >

    // twilioClient.messages.create({
    //     to: '9013649552',
    //     from: '6502514237',
    //     body: 'Ahoy from Twilio!'
    // },function(err){
    //     console.log('error');
    //     console.log(err);
    // });

    // Email Configuration Endpoint
    var serverConfig = {};
    serverConfig.gmail = {};
    serverConfig.gmail.user = 'readus@mookiedough.com';
    serverConfig.gmail.client_id = '196096326234-qlbj0t2huom8sbuh2fsgd45918spg768.apps.googleusercontent.com';
    serverConfig.gmail.secret = 'zGvdxHXCjHop4snlYUJvIkaC';
    serverConfig.gmail.refresh_token = '1/9oAOubCiP8-DQYYbglQuMlS7x-6HiBShLPbephqFnVU';

    // cont.
    let client = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            type: 'OAuth2',
            user: serverConfig.gmail.user,
            clientId: serverConfig.gmail.client_id,
            clientSecret: serverConfig.gmail.secret,
            refreshToken: serverConfig.gmail.refresh_token
            // accessToken: serverConfig.gmail.access_token,
        }
    });

    // cont.
    var sendMail = function (to, subject, html, text, callback) {
        var email = {
            from: 'Mookie Dough Staff, readus@mookiedough.com',
            to: to,
            subject: subject,
            html: html,
            text: text
        };
        client.sendMail(email, function (err, inf) {
            if (err) {
                //Log errors to db / send error to user
                // Possibly a callback to handle the err from the function
                console.log(err);

            }
            else {
                callback(inf);
                // email sent
            }
        });
    }
    // >

    var veryTemp = '<!DOCTYPE html> <html> <head> <meta charset="utf-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <meta name="viewport" content="width=device-width, initial-scale=1"> <style type="text/css"> body { margin: 0!important; padding: 15px; background-color: #FFF; } .wrapper { width: 100%; table-layout: fixed; } .wrapper-inner { width: 100%; background-color: #eee; max-width: 670px; margin: 0 auto; } table { border-spacing: 0; font-family: sans-serif; color: #727f80; } .outer-table { width: 100%; max-width: 670px; margin: 0 auto; background-color: #FFF; } td { padding: 0; } .header { background-color: #C2C1C1; border-bottom: 3px solid #81B9C3; } p { margin:0; } .header p { text-align: center; padding: 1%; font-weight: 500; font-size: 11px; text-transform: uppercase; } a { color: #F1F1F1; text-decoration: none; } /*--- End Outer Table 1 --*/ .main-table-first { width: 100%; max-width: 610px; margin: 0 auto; background-color: #FFF; border-radius: 6px; margin-top: 25px; } /*--- Start Two Column Sections --*/ .two-column { text-align: center; font-size: 0; padding: 5px 0 10px 0; } .two-column .section { width: 100%; max-width: 300px; display: inline-block; vertical-align: top; } .two-column .content { font-size: 16px; line-height: 20px; text-align: justify; } .content { width: 100%; padding-top: 20px; } .center { display: table; Margin: 0 auto; } img { border: 0; } img.logo { float: left; margin-left: 5%; max-width: 200px!important; } #callout { float: right; margin: 4% 5% 2% 0; height: auto; overflow: hidden; } #callout img { max-width: 20px; } .social { list-style-type: none; margin-top: 1%; padding: 0; } .social li { display: inline-block; } .social li img { max-width: 15px; margin-bottom: 0; padding-bottom: 0; } /*--- Start Outer Table Banner Image, Text & Button --*/ .image img { width: 100%; max-width: 670px; height: auto; } .main-table { width: 100%; max-width: 610px; margin: 0 auto; background-color: #FFF; border-radius: 6px; } .one-column .inner-td { font-size: 16px; line-height: 20px; text-align: justify; } .inner-td { padding: 10px; } .h2 { text-align: center; font-size: 23px; font-weight: 600; line-height: 45px; Margin: 12px; color: #4A4A4A; } p.center { text-align: center; max-width: 580px; line-height: 24px; } .button-holder-center { text-align: center; Margin: 5% 2% 3% 0; } .button-holder { float: right; Margin: 5% 0 3% 0; } .btn { font-size: 15px; font-weight: 600; background: #81BAC6; color: #FFF; text-decoration: none; padding: 9px 16px; border-radius: 28px; } /*--- Start Two Column Image & Text Sections --*/ .two-column img { width: 100%; max-width: 280px; height: auto; } .two-column .text { padding: 10px 0; } /*--- Start 3 Column Image & Text Section --*/ .outer-table-2 { width: 100%; max-width: 670px; margin: 22px auto; background-color: #C2C1C1; border-bottom: 3px solid #81B9C3; border-top: 3px solid #81B9C3; } .three-column { text-align: center; font-size: 0; padding: 10px 0 30px 0; } .three-column .section { width: 100%; max-width: 200px; display: inline-block; vertical-align: top; } .three-column .content { font-size: 16px; line-height: 20px; } .three-column img { width: 100%; max-width: 125px; height: auto; } .outer-table-2 p { margin-top: 6px; color: #FFF; font-size: 18px; font-weight: 500; line-height: 23px; } /*--- Start Two Column Article Section --*/ .outer-table-3 { width: 100%; max-width: 670px; margin: 22px auto; background-color: #C2C1C1; border-top: 3px solid #81B9C3; } .h3 { text-align: center; font-size: 21px; font-weight: 600; Margin-bottom: 8px; color: #4A4A4A; } /*--- Start Bottom One Column Section --*/ .inner-bottom { padding: 22px; } .h1 { text-align: center!important; font-size: 25px!important; font-weight: 600; line-height: 45px; Margin: 12px 0 20px 0; color: #4A4A4A; } .inner-bottom p { font-size: 16px; line-height: 24px; text-align: justify; } /*--- Start Footer Section --*/ .footer { width: 100%; background-color: #C2C1C1; Margin: 0 auto; color: #FFF; } .footer img { max-width: 135px; Margin: 0 auto; display: block; padding: 4% 0 1% 0; } p.footer { text-align: center; color: #FFF!important; line-height: 30px; padding-bottom: 4%; text-transform: uppercase; } /*--- Media Queries --*/ @media screen and (max-width: 400px) { .h1 { font-size: 22px; } .two-column .column, .three-column .column { max-width: 100%!important; } .two-column img { width: 100%!important; } .three-column img { max-width: 60%!important; } } @media screen and (min-width: 401px) and (max-width: 400px) { .two-column .column { max-width: 50%!important; } .three-column .column { max-width: 33%!important; } } @media screen and (max-width:768px) { img.logo { float:none !important; margin-left:0% !important; max-width: 200px!important; } #callout { float:none !important; margin: 0% 0% 0% 0; height: auto; text-align:center; overflow: hidden; } #callout img { max-width:26px !important; } .two-column .section { width: 100% !important; max-width: 100% !important; display: inline-block; vertical-align: top; } .two-column img { width: 100% !important; height: auto !important; } img.img-responsive { width:100% !important; height:auto !important; max-width:100% !important; } .content { width: 100%; padding-top:0px !important; } } </style> </head> <body> <div class="wrapper"> <div class="wrapper-inner"> <table class="outer-table"> <tr> <td class="header"> <p><a href="index.html#">Click to view this email in your browser</a></p> </td> </tr> <!--- End Header --> </table> <!--- End Outer Table --> <table class="main-table-first"> <tr> <td class="two-column"> <div class="section"> <table width="100%"> <tr> <td class="inner-td"> <table class="content"> <tr> <td align="center"> <img src="localhost:8081/static/beachdo1.jpg" class="logo"> </td> </tr> </table> </td> </tr> </table> </div> <!--- End First Column of Two Columns --> <div class="section"> <table width="100%"> <tr> <td class="inner-td"> <table class="content"> <tr> <td> <div id="callout"> <ul class="social"> <li><a href="index.html#" target="_blank"><img src="facebook.png"></a></li> <li><a href="index.html#" target="_blank"><img src="googleplus.png"></a></li> <li><a href="index.html#" target="_blank"><img src="twitter.png"></a></li> <li><a href="index.html#" target="_blank"><img src="youtube.png"></a></li> <li><a href="index.html#" target="_blank"><img src="instagram.png"></a></li> </ul> </div> </td> </tr> </table> </td> </tr> </table> </div> <!--- End Second Column of Two Columns --> </td> </tr> <!--- End Two Column Section --> </table> <!--- End Main Table --> <table class="outer-table"> <tr> <td class="image"> <img src="http://localhost:8081/static/beachdo1.jpg"> </td> </tr> <!--- End Banner --> </table> <!--- End Outer Table --> <table class="main-table"> <tr> <td class="one-column"> <table width="100%"> <tr> <td class="inner-td"> <p class="h2">Weekly Newsletter</p> <p class="center">This week we\'ll learn how to use HTML and CSS to create really awesome newsletters for our websites! We\'re going to use HTML tables in order to give the email layouts it\'s responsiveness and mobile-friendly version as well as have cross-email-client compatilibility.</p> <p class="button-holder-center"> <a class="btn" href="#">Learn more</a> </p> </td> </tr> </table> </td> </tr> <!--- End Heading, Paragraph & Button Section --> <tr> <td class="two-column"> <div class="section"> <table width="100%"> <tr> <td class="inner-td"> <table class="content"> <tr> <td> <img src="search.png" class="img-responsive"> </td> </tr> <tr> <td class="text"> <p>Make your emails stand-out in the crowd of other messages in the inbox your readers search through with a compelling design!</p> </td> </tr> </table> </td> </tr> </table> </div> <!--- End First Column of Two Columns --> <div class="section"> <table width="100%"> <tr> <td class="inner-td"> <table class="content"> <tr> <td> <img src="chat.png" class="img-responsive"> </td> </tr> <tr> <td class="text"> <p>Get the conversation started with your readers and respond to their messages for the better email open-rates when engaging your list.</p> </td> </tr> </table> </td> </tr> </table> </div> <!--- End Second Column of Two Columns --> </td> </tr> <!--- End Two Column Section --> </table> <!--- End Main Table --> <table class="outer-table-2" style="background-color: #C2C1C1;"> <tr> <td class="three-column"> <div class="section"> <table width="100%"> <tr> <td class="inner-td"> <table class="content"> <tr> <td> <img src="mouse.png"> </td> </tr> <tr> <td class="text"> <p>View emails on your mobile phone or tablet device.</p> </td> </tr> </table> </td> </tr> </table> </div> <!--- End First Column of Three Columns --> <div class="section"> <table width="100%"> <tr> <td class="inner-td"> <table class="content"> <tr> <td> <img src="mac.png"> </td> </tr> <tr> <td class="text"> <p>View emails on your mobile phone or tablet device.</p> </td> </tr> </table> </td> </tr> </table> </div> <!--- End Second Column of Three Columns --> <div class="section"> <table width="100%"> <tr> <td class="inner-td"> <table class="content"> <tr> <td> <img src="localhost:8081/static/beachdo1.jpg"> </td> </tr> <tr> <td class="text"> <p>View emails on your mobile phone or tablet device.</p> </td> </tr> </table> </td> </tr> </table> </div> <!--- End Third Column of Three Columns --> </td> </tr> <!--- End Three Column Section --> </table> <!--- End Outer Table 2 --> <table class="main-table"> <tr> <td class="two-column"> <div class="section"> <table width="100%"> <tr> <td class="inner-td"> <table class="content"> <tr> <td> <img src="pie-chart.png" class="img-responsive"> </td> </tr> <tr> <td class="text"> <p class="h3">Article Content</p> <p>Get the conversation started with your readers and respond to their messages for the better email open-rates when engaging your list.</p> <br> <p>Get the conversation started with your readers and respond to their messages for the better email open-rates when engaging your list.</p> <br> </td> </tr> </table> </td> </tr> </table> </div> <!--- End First Column of Two Columns --> <!--[if (gte mso 9)|(IE)]> </td><td width="50%" valign="top"> <![endif]--> <div class="section"> <table width="100%"> <tr> <td class="inner-td"> <table class="content"> <tr> <td class="text"> <p class="h3">Article Content</p> <p>Get the conversation started with your readers and respond to their messages for the better email open-rates when engaging your list.</p> <br> <p>Get the conversation started with your readers and respond to their messages for the better email open-rates when engaging your list.</p> <br> </td> </tr> <tr> <td> <img src="users.png" class="img-responsive"> </td> </tr> </table> </td> </tr> </table> </div> <!--- End Second Column of Two Columns --> </td> </tr> <!--- End Two Column Section --> <tr> <td class="one-column"> <table width="100%"> <tr> <td class="inner-bottom"> <p class="h1">The Real Story</p> <p>Email marketing is the act of sending a commercial message, typically to a group of people, using email. In its broadest sense, every email sent to a potential or current customer could be considered email marketing. Email marketing is the act of sending a commercial message, typically to a group of people, using email. In its broadest sense, every email sent to a potential or current customer could be considered email marketing</p> <br> <p>Email marketing is the act of sending a commercial message, typically to a group of people, using email. In its broadest sense, every email sent to a potential or current customer could be considered email marketing</p> <div class="button-holder"> <a class="btn" href="#">Learn more</a> </div> </td> </tr> </table> </td> </tr> <!--- End Heading, Text & Button Section --> </table> <!--- End Main Table --> <table class="outer-table-3"> <tr> <td class="one-column"> <table width="100%"> <tr> <td class="footer"> <img src="w3newbie-logo.png"> <p class="footer">1000 Street Road My City, My State 19000<br>&copy; w3newbie, 2017.<br><a href="index.html#">Unsubscribe</a></p> </td> </tr> </table> </td> </tr> </table> <!--- End Main Table --> </div> <!--- End Wrapper Inner --> </div> <!--- End Wrapper --> <br> </body> </html>';


    // sendMail('readus@mookiedough.com', 'test', veryTemp, function (data) {
    //     console.log(data);
    //     console.log('This is the data');
    // });

    // SiteVisit apis
    router.post('/getSiteVisitors', function (req, res) {
        SiteVisit.find({}).select().exec(function (err, siteVisits) {
            if (err) {
                res.json({ success: false, message: 'There was an error trying to look up site visitors', err: err });
            }
            else {
                if (!siteVisits) {
                    res.json({ success: true, message: 'There are no site visitors which should be impossible if youre visiting the site.', numberOfSiteVisitors: 0 });
                }
                else {
                    res.json({ success: true, message: 'Site visitors found', numberOfSiteVisitors: siteVisits.length });
                }
            }
        });
    });

    // cont.
    router.post('/checkVisitor', function (req, res) {
        if (req.body.ipAddress == null || req.body.ipAddress == '') {
            res.json({ success: false, message: 'IP address not included in psot body' });
        }
        else {
            SiteVisit.findOne({ ipAddress: req.body.ipAddress }).select().exec(function (err, siteVisit) {
                if (err) {
                    res.json({ success: false, message: 'There was an error trying to look for the ipAddress', err: err });
                }
                else {
                    if (!siteVisit) {
                        var newSiteVisit = new SiteVisit();
                        newSiteVisit.ipAddress = req.body.ipAddress;
                        newSiteVisit.save(function (err, newSite) {
                            if (err) {
                                res.json({ success: false, message: 'There was an error tyring to save new new site visitation', err: err });
                            }
                            else {
                                res.json({ success: true, message: 'This was the users first time visiting the site' });
                            }
                        });
                    }
                    else {
                        res.json({ success: true, message: 'User has visited site' });
                    }
                }
            });
        }
    });
    //  >

    // Cart api endpoint 
    // Get all old carts of a user
    router.post('/getOldCarts', function (req, res) {
        if (req.body.user == null || req.body.user == '') {
            res.json({ success: false, message: 'There was an error' });
        }
        else {
            Cart.find({ oldCart: true, user: req.body.user }).populate('products').exec(function (err, carts) {
                if (err) {
                    res.json({ success: false, message: 'There was an error trying to find users cart history', err: err });
                }
                else {
                    if (!carts) {
                        res.json({ success: false, message: 'The user has no carts' });
                    }
                    else {
                        res.json({ success: true, message: 'Users cart history detect', carts: carts });
                    }
                }
            });
        }
    });

    // Get orders for a specific user
    router.post('/getUserOrders', function (req, res) {
        if (req.body.userId === null || req.body.userId === '') {
            res.json({ success: false, message: 'Something went wrong. Our staff is currently trying to handle this issue.' });
        }
        else {
            Order.find({ user: req.body.userId }).populate({ path: 'customerReceipt', populate: { path: 'customerCart', populate: { path: 'user' } } }).populate({ path: 'customerReceipt', populate: { path: 'customerCart', populate: { path: 'products' } } }).exec(function (err, orders) {
                if (err || !orders) {
                    res.json({ success: false, message: 'Something went wrong while trying to look up orders', err: err });
                }
                else {
                    res.json({ success: true, message: 'Orders found successfully', orders: orders });
                }
            });
        }
    });

    // Get order currently for management possibly for user
    router.post('/getOrder', function (req, res) {
        if (req.body.orderId === null || req.body.orderId === '') {
            res.json({ success: false, message: 'Could not get the order because orderId was somehow not provided.' });
        }
        else {
            console.log(req.body.orderId);
            // res.json({ success: false, message: 'Could not get the order because orderId was somehow not provided.' });
            // 'customerReceipt customerReceipt.customerCart customerReceipt.customerCart.user customerReceipt.customerCart.products'
            Order.findById(req.body.orderId).populate({ path: 'customerReceipt', populate: { path: 'customerCart', populate: { path: 'user' } } }).populate({ path: 'customerReceipt', populate: { path: 'customerCart', populate: { path: 'products' } } }).exec(function (err, order) {
                if (err || !order) {
                    res.json({ success: false, message: 'Could not find order with that id', err: err });
                }
                else {
                    res.json({ success: true, message: 'Order found', order: order });
                }
            }, function (err) {
                res.json({ success: false, message: 'Could not find order with that id', err: err });
            });
        }
    });
    // >

    // Update Driver location for a delivery order
    router.post('/updateDriverLocation', function (req, res) {
        if (req.body.lat === null || req.body.lat === '' || req.body.lng === null || req.body.lat === '' || req.body.order === null || req.body.order === '') {
            res.json({ success: false, message: 'Header body incorrect' });
        }
        else {
            Order.findByIdAndUpdate(req.body.order, { 'currentDriverLocation.lat': req.body.lat, 'currentDriverLocation.lng': req.body.lng }, function (err, updatedOrder) {
                if (err || !updatedOrder) {
                    console.log(err);
                    console.log(updatedOrder);
                    res.json({ success: false, message: 'There was an error trying to update the order', err: err });
                }
                else {
                    res.json({ success: true, message: 'Driver Location has been updated', updatedorder: updatedOrder });
                }
            }, function (err) {
                res.json({ success: false, message: 'There was an error trying to update the order', err: err });
            });
        }
    });
    // >

    // Update delivery status to Pending, Started, OnTheWay, and Completed
    router.post('/updateDeliveryStatus', function (req, res) {
        if (req.body.orderId === null || req.body.orderId === '' || req.body.orderStatus === null || req.body.orderStatus === '') {
            res.json({ success: false, message: 'Correct order id not presented' });
        }
        else {
            Order.findById(req.body.orderId, function (err, order) {
                if (err || !order) {
                    res.json({ success: false, message: 'Could not find and update order', err: err });
                }
                else {
                    order.orderStatus = req.body.orderStatus;
                    // if(order.orderStatus === 'OnTheWay'){
                    //     twilioClient.messages.create({
                    //         to: order.userContactNumber,
                    //         from: '6502514237',
                    //         body: 'Hello ' + order.customerReceipt.customerCart.user.username + ', The Doughboys are on our are way with your cookie to ' +
                    //             order.customerAddress + ''
                    //     }, function (err) {
                    //         console.log('error');
                    //         console.log(err);
                    //     });

                    // }
                    // else if (order.orderStatus === 'Completed') {
                    //     order.orderCompleted = true;
                    //     order.orderCompeltedOn = Date.now();
                    //     twilioClient.messages.create({
                    //         to: order.userContactNumber,
                    //         from: '6502514237',
                    //         body: 'Hello ' + order.customerReceipt.customerCart.user.username + ', Thanks for ordering with Mookie Dough :) ' 
                    //     }, function (err) {
                    //         console.log('error');
                    //         console.log(err);
                    //     });
                    // }

                    order.save(function (err, newOrder) {
                        if (err || !newOrder) {
                            res.json({ success: false, message: 'Could not update order status', err: err });
                        }
                        else {
                            res.json({ success: true, message: 'Order updated successfully', order: newOrder });
                        }
                    })
                }
            });
        }
    });
    // >

    // Get current orders for management
    router.post('/getCurrentOrders', function (req, res) {
        Order.find({}).populate({ path: 'customerReceipt', model: 'Receipt' }).exec(function (err, orders) {
            if (err || !orders) {
                res.json({ success: false, message: 'There was an error tying to populate all orders', err: err });
            }
            else {
                orders.forEach(function (order, index, arr) {
                    Cart.findById(order.customerReceipt.customerCart).populate('user').populate('products').exec(function (err, cart) {

                        if (err || !cart) {
                            res.json({ success: false, message: 'There was an error trying to populate all orders', err: err, orders: orders });
                        }
                        else {
                            if (index == 2) console.log(orders[index]);
                            var newCart = cart;
                            arr[index].customerReceipt.customerCart = newCart;
                            if (index == 2) console.log(orders[index]);

                            // console.log(orders[i]);
                        }
                        if (index === orders.length - 1) {
                            res.json({ success: true, message: "Orders populated", orders: orders });

                        }


                    }, function (err) {
                        console.log(err);
                        res.json({ success: false, message: 'There was an error trying to populate all orders', err: err, orders: orders });
                    });

                });
            }

        }, function (err) {
            res.json({ success: false, message: 'There was an error trying to populate all orders', err: err });
        });
    });
    // >


    // Update inventory
    var updateInventory = function (cartProducts) {
        return new Promise(function (resolve, reject) {
            // Product Id Map
            var productMap = new Map();
            cartProducts.forEach(element => {
                if (productMap.has(element._id)) {
                    productMap.set(element._id, productMap.get(element._id) + 1);
                }
                else {
                    productMap.set(element._id, 1);
                }
            });
            var inventoryId = '5ae3d64ef729f01ce2a747b5';
            Inventory.findById(inventoryId).exec(function (err, inventory) {
                if (err || !inventory) {
                    resolve(false);
                }
                else {
                    var inventoryItems = [];

                    var productIdMap = new Map();
                    productIdMap.set("5ac3ca60f3ac611f582f031e", "og mookie");
                    productIdMap.set("5ac3ca60f3ac611f582f031b", "funfetti");
                    productIdMap.set("5ac3ca60f3ac611f582f031c", "oreo");
                    productIdMap.set("5ac3ca60f3ac611f582f031a", "Red velvet");
                    productIdMap.set("5ac3ca60f3ac611f582f031d", "Dark chocolate");
                    // >

                    for (var key of productMap.keys()) {
                        console.log(key);
                        var newInventoryItem = {};
                        newInventoryItem.itemName = productIdMap.get(key.toString());
                        console.log('key');
                        console.log(newInventoryItem.itemName);
                        console.log(productIdMap.get(key.toString()));
                        newInventoryItem.itemPrice = 2.99;
                        newInventoryItem.itemQty = -productMap.get(key);
                        inventoryItems.push(newInventoryItem);
                    }
                    // Inventory.update({ 'items.id': 2 }, {
                    //     '$set': {
                    //         'items.$.name': 'updated item2',
                    //         'items.$.value': 'two updated'
                    //     }
                    // }, function (err) { });
                    // for (var item of inventoryItems) {
                    //     inventory.itemInventory.push(item);
                    // }
                    Inventory.update(
                        { "_id": inventory._id },
                        { "$push": { "itemInventory": { "$each": inventoryItems } } },
                        function (err, callback) {
                            console.log(err);
                            resolve(true);
                        }
                    );
                    // inventory.save(function (err, newInventory) {
                    //     console.log(err);
                    //     if (err || !newInventory) {
                    //         resolve(false);
                    //     }
                    //     else {
                    //         resolve(true);
                    //     }
                    // });
                }
            }, function (err) {
                resolve(false);
            });

        });
    };
    // >

    // Check Inventory before user order goes through
    var checkInventory = function (cartProducts) {
        return new Promise(function (resolve, reject) {
            var productMap = new Map();
            cartProducts.forEach(element => {
                if (productMap.has(element._id)) {
                    productMap.set(element._id, productMap.get(element._id) + 1);
                }
                else {
                    productMap.set(element._id, 1);
                }
            });

            var inventoryId = '5ae3d64ef729f01ce2a747b5';
            Inventory.findById(inventoryId).exec(function (err, inventory) {
                if (err || !inventory) {
                    resolve(false);
                }
                else {
                    var inventoryItems = [];
                    var inventoryMap = new Map();
                    inventory.totals.forEach(total => {
                        inventoryMap.set(total.itemName, total.itemQtyTotal);
                    });
                    for (var item of inventory.itemInventory) {
                        if (productMap.has(item.itemId)) {
                            if (productMap.get(item.itemId) < inventoryMap.get(item.itemName)) {
                                resolve(false);
                            }
                        }
                    }
                    resolve(true);
                }
            }, function (err) {
                resolve(false);
            });
        });
    };

    // Checks out a user's cart based on the cart's generated stripe token and user's information
    //TODO: There needs to be a way to start an active delivery order that can be tracked that
    // stores information like the location of the driver and customer and details on the order
    // Use stripes charge and token system to store information about specific orders, copy the hash/token in stripe as the id for the order 
    // Or! google how to order product ids for e commerce products
    router.post('/checkout', function (req, res) {
        if (req.body.token == null || req.body.name == null || req.body.price == null || req.body.userEmail == null
            || req.body.userEmail == '' || req.body.user === null || req.body.deliveryLocation === null || req.body.cart === null, req.body.deliveryLatLng === null) {
            res.json({ success: false, message: "Please try checkout again at a later time" });
        }
        else {
            User.findOne({ email: req.body.userEmail }).select().exec(function (err, user) {
                if (err) {
                    res.json({ success: false, message: 'There was an error trying to change user cart during checkout', err: err });
                }
                else {
                    if (!user) {
                        res.json({ success: false, message: 'There is no user with that email' });
                    }
                    else {
                        Cart.findOneAndUpdate({ _id: user.cart }, { $set: { oldCart: true, user: user._id, checkoutDate: Date.now() } }).populate('products').exec(function (err, cart) {
                            if (err) {
                                res.json({ success: false, message: 'There was an error trying update old user cart', err: err });
                            }
                            else {
                                if (!cart) {
                                    res.json({ success: false, message: 'There was an error trying to find old user cart' });
                                }
                                else {
                                    checkInventory(cart.products).then(function (inventoryFilled) {
                                        if (inventoryFilled) {
                                            // Abigail
                                            var receipt = new Receipt();
                                            receipt.customerName = req.body.user.username;
                                            receipt.customerAddress = req.body.deliveryLocation;
                                            receipt.customerCart = req.body.cart._id;
                                            receipt.geometryAddress = req.body.deliveryLatLng;

                                            receipt.save(function (err, newReceipt) {
                                                if (err || !newReceipt) {
                                                    res.json({ success: false, message: 'Could not generate receipt', err: err });
                                                }
                                                Receipt.populate(newReceipt, {
                                                    path: "customerCart", populate: { path: 'products', model: 'Product' }
                                                }, function (err, newreceipt) {
                                                    if (err || !newreceipt) {
                                                        res.json({ success: false, message: 'Could not generate receipt', err: err });
                                                    }
                                                    else {
                                                        var order = new Order();
                                                        order.customerReceipt = newreceipt;
                                                        order.user = user._id;
                                                        order.userContactNumber = req.body.userContactNumber;
                                                        order.save(function (err, newOrder) {
                                                            if (err || !newOrder) {
                                                                res.json({ success: false, message: 'Could not start new order', err: err });
                                                            }
                                                            else {
                                                                // Should be used to allow text communication for admins 6502514237
                                                                var doughboys = ['9013649552', '6308815799', '3162090923'];
                                                                if (false) {
                                                                    twilioClient.messages.create({
                                                                        to: doughboys,
                                                                        from: '6502514237',
                                                                        body: 'New order:\ncustomerName: ' + newOrder.customerReceipt.customerCart.user.username + 'Address: ' +
                                                                            newOrder.customerAddress + ''
                                                                    }, function (err) {
                                                                        console.log('error');
                                                                        console.log(err);
                                                                    });
                                                                }
                                                                updateInventory(cart.products).then(function (value) {
                                                                    console.log('update inventory');
                                                                    console.log(value);
                                                                    //Provide telmetry for when inventory fails
                                                                });
                                                                // user.cart = null;
                                                                user.save(function (err, user) {
                                                                    if (err || !user) {
                                                                        res.json({ success: false, message: 'There was an error trying to send your email', err: err });
                                                                    }
                                                                    else {
                                                                        stripe.charges.create({
                                                                            amount: req.body.price,
                                                                            currency: "usd",
                                                                            description: "Mookie Dough LLC Payment",
                                                                            source: req.body.token // obtained with Stripe.js
                                                                        }, function (err, charge) {
                                                                            console.log(charge);
                                                                            if (err) {
                                                                                res.json({ success: false, message: 'There was an error with our stripe api', err: err });
                                                                            }
                                                                            else {
                                                                                if (!charge) {
                                                                                    // Do more backtracking for order here
                                                                                    res.json({ success: false, message: 'Something went wrong when connecting to our stripe charges api' });
                                                                                }
                                                                                else {
                                                                                    var html = '<html><head> <style type="text/css" media="screen"> .mainImg { width: 600px; height: 300px; } .center-content { text-align: center; width: 100%; } a{ color:black; border:black 1px solid; } </style></head><body> <table style="width:100%;"> <tr class="center-content"> <td> <p> Thanks for ordering Mookie Dough Today! <br> Here\'s a link to track your order\'s progress <!-- Order link --> <a href="https://www.mookiedough.co/orders/' + newOrder._id + '">Your Order</a> </p>  </td> </tr> <tr class="center-content"><td><img class="mainImg" src="https://www.mookiedough.co/sites/default/files/dorm5-min.jpg"></td> </tr> </table></body></html>';

                                                                                    var text = 'Thanks for ordering Mookie Dough. Go to https://www.mookiedough.co/orders/' + newOrder._id + ' to view your order';
                                                                                    var subject = 'Mookie Dough Order Accepted';
                                                                                    sendMail(user.email, subject, html, text, function (data) {
                                                                                        console.log(data);
                                                                                    });
                                                                                    res.json({ success: true, message: 'Charge completed successfully', charge: charge, receipt: newreceipt, order: newOrder });
                                                                                }
                                                                            }
                                                                        });

                                                                    }
                                                                });
                                                            }
                                                        });
                                                    }
                                                });
                                            }, function (err) {
                                                res.json({ success: false, message: 'There was another errror trying to save receipt', err: err });
                                            });
                                        }
                                        else {
                                            res.json({ success: false, message: 'Sorry some items in your cart are out of stock, please remove them and start again' });

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
    // >

    // Android Api Endpoint
    router.post('/tryAndroid', function (req, res) {
        if (req.body.message == '' || req.body.message == null) {
            res.json({ success: false, message: 'Did not include a message to print out' });
        }
        else {
            res.json({ success: true, message: 'We got your try android post' });
        }
    });
    // >

    // ContactMessage Api Endpoint
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

    // cont.
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
    // >


    // Subscription api Endpoint
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

    // cont.
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
    // >

    //I need to define how my apis will be entitled. 
    //A cart is a cart but you can also get a cart through the user
    // My method of getting the cart is not conssitent. Sometimes I ge the cart by 

    // Cart Api Endpoint
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

    router.post('/removeCart', function (req, res) {
        User.findOne({ email: req.body.userEmail }).select().exec(function (err, user) {
            if (err) {
                res.json({ success: false, err: err });
            }
            else {
                if (!user) {
                    res.json({ success: false, message: 'There was no user associated with that email address' });
                }
                else {
                    user.cart = '';
                    user.save(function (err, user) {
                        if (err) {
                            res.json({ success: false, err: err });
                        }
                        else {
                            res.json({ success: true, message: 'Cart removed' });
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
        // var product = new Product(req.body);
        if (req.body.product === null) {
            res.json({ success: false, message: "The Product isn't in our registry" });
        }
        else {
            User.findById(req.body.userId).select().exec(function (err, user) {
                var userData = {};
                userData.user = user;
                if (err || !user) {
                    res.json({ success: false, message: 'user was not found', err: err });
                }
                else if (user.cart == null || user.cart == "") {
                    console.log('make new cart');
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
                                    cart.products.push(req.body.product);
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
                                console.log('make new cart');
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
                                                cart.products.push(req.body.product);
                                                cart.save(function (err, cart) {
                                                    res.json({ success: true, message: 'User Cart has been created and updated', cart: cart });
                                                });
                                            }

                                        });
                                    }
                                });

                            }
                            else {
                                console.log('push into cart');
                                cart.products.push(req.body.product);
                                cart.save(function (err, cart) {
                                    if (err || !cart) {
                                        res.json({ success: false, message: 'There was an error trying to save new cart', err: err });
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
        }
    });

    // router.post('/updateProductQty', function (req, res) {
    //     // Get product Id and find product/
    //     // Change to get cart and update products completely
    //     if(req.body.products === null || req.body.cartId === null || req.body.cartId === ''){
    //         res.json({ success: false, messsage: 'cartId or products were not found in post request' });

    //     }
    //     else {
    //         Cart.findById(req.body.cartId).select().exec(function(err,cart){
    //             if(err || !cart){
    //                 res.json({success:false,message:'There was an error trying to get the cart by id',err:err})
    //             }
    //             else{
    //                 cart.products = req.body.products;
    //                 cart.save(function(err,newCart){
    //                     if(err || !newCart){
    //                         res.json({success:false,message:'Product could not be updated',err:err});
    //                     }
    //                     else{
    //                         res.json({success:true,message:'Cart updated Successfully',cart:newCart});
    //                     }
    //                 });
    //             }
    //         });
    //     }
    // });

    router.post('/updateUserCart', function (req, res) {
        if (req.body.cartProducts === null || req.body.cartId === null || req.body.cartId === '') {
            res.json({ success: false, message: 'Cant get cart to update' });
        }
        else {
            Cart.findById(req.body.cartId).select().exec(function (err, cart) {
                if (err || !cart) {
                    res.json({ success: false, message: 'Error attempting to get cart', err: err });
                }
                else {
                    cart.products = [];
                    req.body.cartProducts.forEach(function (product) {
                        for (var i = 0; i < product.qty; i++) {
                            cart.products.push(product._id);
                        }
                    });

                    cart.save(function (err, newCart) {
                        if (err || !cart) {
                            res.json({ success: false, message: 'There was an error while trying to save the cart', err });
                        }
                        else {
                            res.json({ success: true, message: 'Cart successfully updated', cart: newCart });
                        }
                    });
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
                    cart.products.remove({ _id: req.body.productId });
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


    // User api Endpoint
    router.post('/getUser', function (req, res) {
        User.findOne({ email: req.body.userEmail }).select().exec(function (err, user) {
            if (err || !user) {
                res.json({ success: false, message: 'There was another error', err: err });
            }
            else {
                if (!user) {
                    res.json({ success: false, message: 'Incorrect user infomation' });
                }
                else {
                    res.json({ success: true, user: user });
                }
            }
        });
    });

    // cont.
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


    // cont.
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
    // >

    router.post('/facebookRegister', function (req, res) {
        var user = new User();
        user.email = req.body.email;
        user.socialToken = req.body.socialToken;
        user.username = req.body.username;
        user.temporaryToken = jwt.sign({ username: user.username, email: user.email }, secret, { expiresIn: '7d' });

        if (req.body.username === null || req.body.username === '' || req.body.socialToken === null || req.body.email === null
            || req.body.email === '') {
            res.json({ success: false, message: 'Ensure social login occured successfully' });
        } else {
            user.save(function (err, user) {
                if (err) {
                    if (err.errors != null) {
                        if (err.errors.email) {
                            res.json({ success: false, message: err.errors.email.message });
                        } else if (err.errors.username) {
                            res.json({ success: false, message: err.errors.username.message });
                        }
                    }
                    else if (err) {
                        if (err.code == 11000) {
                            if (err.errmsg[65] == "u") {
                                res.json({ success: false, message: 'That username is already taken', err: err }); // Display error if username already taken
                            } else if (err.errmsg[65] == "e") {
                                res.json({ success: false, message: 'That e-mail is already taken', err: err }); // Display error if e-mail already taken
                            }
                            else {
                                res.json({ success: false, message: 'An error occurred', err: err });
                            }
                        } else {
                            res.json({ success: false, message: err }); // Display any other error
                        }
                    }
                }
                else {
                    res.json({ success: true, message: 'Account registered! Please check your e-mail for activation link.' }); // Send success message back to controller/request                    
                }

            }, function (err) {
                res.json({ success: false, message: 'There was an unknown error' });
            });
        }
    });

    router.post('/registerMookie', function (req, res) {
        var user = new User();
        //json body needs username, passowrd, email, name
        user.email = req.body.email;
        user.password = req.body.password;
        user.username = req.body.username;
        user.temporarytoken = jwt.sign({ username: user.username, email: user.email }, secret, { expiresIn: '3d' });

        if (req.body.username === null || req.body.username === '' || req.body.password === null || req.body.password === '' ||
            req.body.email === null || req.body.email === '') {
            res.json({ success: false, message: 'Ensure username, email, and password were provided' });
        } else {
            if (emailValidator.validate(req.body.email)) {
                user.save(function (err, user) {
                    if (err) {
                        if (err.errors != null) {
                            if (err.errors.email) {
                                res.json({ success: false, message: err.errors.email.message }); // Display error in validation (email)
                            } else if (err.errors.username) {
                                res.json({ success: false, message: err.errors.username.message }); // Display error in validation (username)
                            } else if (err.errors.password) {
                                res.json({ success: false, message: err.errors.password.message }); // Display error in validation (password)
                            }
                            else {
                                res.json({ success: false, message: 'An Error has ocurred' });
                            }
                        }
                        else if (err) {
                            // Check if duplication error exists
                            if (err.code == 11000) {
                                console.log(err);
                                if (err.errmsg[65] == "u") {
                                    res.json({ success: false, message: 'That username is already taken', err: err }); // Display error if username already taken
                                } else if (err.errmsg[65] == "e") {
                                    res.json({ success: false, message: 'That e-mail is already taken', err: err }); // Display error if e-mail already taken
                                }
                                else {
                                    res.json({ success: false, message: 'An error occurred', err: err });
                                }
                            } else {
                                res.json({ success: false, message: err, err: err }); // Display any other error
                            }
                        }
                    }
                    else {
                        var subject = 'Mookie Dough Account Activation Link';


                        var html = '<html><head> <style type="text/css" media="screen"> .headerImg { width: 100%; height: 200px; } .mainMessage { background-color: #333333; } p { color: white; } a { color: white; } @media screen and (min-width:700px) { .headerImg { height: 400px; } } </style></head><body> <table width="100%"> <tr width="100%"> <td width="100%"> <img class="headerImg" src="https://www.mookiedough.co/sites/default/files/header3.png"/> </td> </tr> <tr width="100%" style="text-align:center;"> <td class="mainMessage"> <p> Hello <strong> ' + user.username + '</strong>, <br> <br> Thanks for creating a Mookie Dough account! You can easily log in with the same account you just created and take advantage of Mookie Dough online ordering. Don\'t forget to add your payment method to get the most of your account. Enjoy our Mookie Dough online ordering experience and try some of our pouches; they are a great late night snack. Order before 7pm daily for on campus delivery at www.mookiedough.co Delivery Window for Mookie Dough Products is 9 - 11 pm Questions ? Email readus@mookiedough.com. We\'re here to help! - the Mookie Dough Boys <br> <br> Please click on the link below to complete your activation: <br> <br> <a href="https://www.mookiedough.co/activate/' + user.temporarytoken + '">https://www.mookiedough.co/activate/</a> </p> </td> </tr> </table></body></html>';

                        var text = 'Hello<strong> ' + user.username + '</strong>, <br><br> Thanks for creating a Mookie Dough account! You can easily log in with the same account you just created and take advantage of Mookie Dough online ordering. Don\'t forget to add your payment method to get the most of your account. Enjoy our Mookie Dough online ordering experience and try some of our pouches; they are a great late night snack. Order before 7pm daily for on campus delivery at www.mookiedough.co Delivery Window for Mookie Dough Products is 9 - 11 pm Questions ? Email readus@mookiedough.com. We\'re here to help! - the Mookie Dough Boys <br> <br> Please click on the link below to complete your activation:<br><br><a href="https://www.mookiedough.co/activate/' + user.temporarytoken + '">https://www.mookiedough.co/activate/</a>';

                        sendMail(user.email, subject, html, text, function (data) {
                            console.log(data);
                        });

                        res.json({ success: true, message: 'Account registered! Please check your e-mail for activation link.' }); // Send success message back to controller/request
                        // Send email to user about how to successfully activate token
                        // Essentialy create a route /activate/:temporarytoken then find that token when that route is called and allow user to be
                    }
                }, function (err) {
                    console.log('There was an error');
                    res.json({ success: false, message: 'An Error has occurred', err: err });
                });
            }
            else {
                res.json({ success: false, message: 'Ineligible email sent' });
            }

        }
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
                        } else if (user.password === null) {
                            res.json({ success: false, message: 'This email is connected to a social media account' });
                        }
                        else {
                            var token = jwt.sign({ username: user.username, email: user.email }, secret, { expiresIn: '7d' }); // Logged in: Give user token
                            res.json({ success: true, message: 'User authenticated!', token: token, user: user }); // Return token in JSON object to controller
                        }
                    }
                }
            }
        });
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
                                res.json({ success: false, message: 'Something went wrong. This error has been logged and will be addressed by our staff. We apologize for this inconvenience!', err: err });
                            } else {
                                // If save succeeds, create e-mail object
                                var subject = 'Mookie Dough Account Activated';
                                var text = 'Hello<strong> ' + user.username + '</strong,<br><br>Your account has been successfully activated!';
                                var html = '<html><head> <style type="text/css" media="screen"> body { text-align: center; } .mainMessage { background-color: #333333; } .logoImg { width: 200px; height: 200px; } .mainContent { color: white; text-align: center; } .contentMessage { width: 676px; min-width: 676px; } .mookiecell { text-align: left; display: block; width: 100% !important; } a { color: white; } </style></head><body width="80%"> <table width="100%"> <tr class="mainContent"> <td> <img class="logoImg" src="https://www.mookiedough.co/sites/default/files/M00KIE.jpg"> </td> </tr> <tr class="mainContent" width="100%"> <td class="contentMessage"> <p class="mainMessage"> Hello <strong> ' + user.username + '</strong>, <br> <br>Your account has been successfully activated! Thanks for choosing Mookie Dough <br> Go to the <a href="https://www.mookiedough.co">Mookie Dough website</a> to order cookie dough anytime. </p> </td> </tr> </table></body></html>'
                                sendMail(user.email, subject, html, text, function (data) {
                                    console.log(data);
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