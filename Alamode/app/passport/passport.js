var FacebookStrategy = require('passport-facebook').Strategy; // Import Paspport-Facebook Package
var TwitterStrategy = require('passport-twitter').Strategy; // Import Passport Twitter Package
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy; // Import Passport Google Package
var User = require('../models/user');
var session = require('express-session');
var jwt = require('jsonwebtoken');
var secret = 'zm!_0@0hu_7&ii-@j&0wpm3t%ojnvmjx6j0!1*&j@x51&mdzk@'; // Create custom secret for use in JWT
var nodemailer = require('nodemailer'); // Import Nodemailer Package


module.exports = function (app, passport) {
    // Start Passport Configuration Settings
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(session({ secret: 'mighty', resave: false, saveUninitialized: true, cookie: { secure: false } }));
    //End Passport Configuration Settings

    //Serilize users once logged in
    passport.serializeUser(function (user, done) {
        console.log(user);
        if (user.error) {
            token = 'unconfirmed/error';
        }
        else {
            token = jwt.sign({ username: user.username, email: user.email }, secret, { expiresIn: '7d' });
        }
        done(null, user.id); // Return user object
    });

    passport.deserializeUser(function (id, done) {
        console.log('deserialize used');
        User.findById(id, function (err, user) {
            console.log(user);
            done(err, user);
        });
    });

    // Send Registration email
    var sendRegEmail = function (userEmail, username, userToken) {
        var subject = 'Mookie Dough Account Activation Link';


        var html = '<html><head> <style type="text/css" media="screen"> .headerImg { width: 100%; height: 200px; } .mainMessage { background-color: #333333; } p { color: white; } a { color: white; } @media screen and (min-width:700px) { .headerImg { height: 400px; } } </style></head><body> <table width="100%"> <tr width="100%"> <td width="100%"> <img class="headerImg" src="https://www.mookiedough.co/sites/default/files/header3.png"/> </td> </tr> <tr width="100%" style="text-align:center;"> <td class="mainMessage"> <p> Hello <strong> ' + username + '</strong>, <br> <br> Thanks for creating a Mookie Dough account! You can easily log in with the same account you just created and take advantage of Mookie Dough online ordering. Don\'t forget to add your payment method to get the most of your account. Enjoy our Mookie Dough online ordering experience and try some of our pouches; they are a great late night snack. Order before 7pm daily for on campus delivery at www.mookiedough.co Delivery Window for Mookie Dough Products is 9 - 11 pm Questions ? Email readus@mookiedough.com. We\'re here to help! - the Mookie Dough Boys <br> <br> Please click on the link below to complete your activation: <br> <br> <a href="https://www.mookiedough.co/activate/' + userToken + '">https://www.mookiedough.co/activate/</a> </p> </td> </tr> </table></body></html>';

        var text = 'Hello<strong> ' + username + '</strong>, <br><br> Thanks for creating a Mookie Dough account! You can easily log in with the same account you just created and take advantage of Mookie Dough online ordering. Don\'t forget to add your payment method to get the most of your account. Enjoy our Mookie Dough online ordering experience and try some of our pouches; they are a great late night snack. Order before 7pm daily for on campus delivery at www.mookiedough.co Delivery Window for Mookie Dough Products is 9 - 11 pm Questions ? Email readus@mookiedough.com. We\'re here to help! - the Mookie Dough Boys <br> <br> Please click on the link below to complete your activation:<br><br><a href="https://www.mookiedough.co/activate/' + userToken + '">https://www.mookiedough.co/activate/</a>';
        // Email Configuration Endpoint
        var serverConfig = {};
        serverConfig.gmail = {};
        serverConfig.gmail.user = 'readus@mookiedough.com';
        serverConfig.gmail.client_id = '196096326234-qlbj0t2huom8sbuh2fsgd45918spg768.apps.googleusercontent.com';
        serverConfig.gmail.secret = 'zGvdxHXCjHop4snlYUJvIkaC';
        serverConfig.gmail.refresh_token = '1/9oAOubCiP8-DQYYbglQuMlS7x-6HiBShLPbephqFnVU';

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
            }
        });

        // cont.
        var email = {
            from: 'Mookie Dough Staff, readus@mookiedough.com',
            to: userEmail,
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
    };

    //Facebook Strategy
    passport.use(new FacebookStrategy({
        clientID: '1755938197781526',
        clientSecret: '540366e787f708849a05cdc15040f50e',
        callbackURL: 'https://www.mookiedough.co/auth/facebook/callback',
        profileFields: ['id', 'displayName', 'photos', 'email']
    },
        function (accessToken, refreshToken, profile, done) {
            User.findOne({ email: profile._json.email }).select().exec(function (err, user) {
                if (err) done(err);

                if (user && user != null) {
                    done(null, user);
                }
                else {
                    var newUser = new User();

                    newUser.email = profile._json.email;
                    newUser.socialToken = accessToken;
                    newUser.username = profile._json.name;
                    newUser.temporarytoken = jwt.sign({ username: newUser.username, email: newUser.email }, secret, { expiresIn: '7d' });
                    newUser.password = null;
                    newUser.save(function (err, newUser) {
                        if (err) {
                            return done(err);
                        }

                        if (newUser && newUser != null) {
                            sendRegEmail(newUser.email, newUser.username, newUser.temporarytoken);
                            done(null, newUser);
                        } else {
                            return done(err);
                        }
                    });
                }
            });
        }
    ));

    //Twitter Strategy
    passport.use(new TwitterStrategy({
        consumerKey: 'bP8DUmlZfFk8WRsm3k2mbfMT0',
        consumerSecret: 'nnWVw1LuUGA1oJjZMvKj5i4RPNw2zUxwBbmq6fSytmt9pO1lAn',
        callbackURL: 'https://www.mookiedough.co/auth/twitter/callback',
        userProfileURL: 'https://api.twitter.com/1.1/account/verify_credentials.json?include_email=true'
    },
        function (token, tokenSecret, profile, done) {
            console.log('in function');
            console.log(profile);
            if (profile.emails) {
                console.log('true');
            }
            else {
                console.log('false');
            }
            if (profile.emails) {
                User.findOne({ email: profile.emails[0].value }).select().exec(function (err, user) {
                    if (err) {
                        return done(err);
                    }
                    else {
                        if (user && user !== null) {
                            done(null, user);
                        }
                        else {
                            console.log(profile)
                            var newUser = new User();
                            newUser.email = profile.emails[0].value;
                            newUser.socialToken = token;
                            newUser.username = profile._json.name;
                            newUser.temporarytoken = jwt.sign({ username: newUser.username, email: newUser.email }, secret, { expiresIn: '7d' });
                            newUser.password = null;
                            newUser.save(function (err, newUser) {
                                if (err) {
                                    return done(err);
                                }

                                if (newUser && newUser != null) {
                                    sendRegEmail(newUser.email, newUser.username, newUser.temporarytoken);
                                    done(null, newUser);
                                }
                                else {
                                    return done(err);
                                }
                            });
                        }
                    }
                });
            }
            else {
                user = {};
                user.id = 'null';
                user.active = true;
                user.error = true;
                done(null, user);
            }
        }
    ));

    // Google Strategy
    passport.use(new GoogleStrategy({
        clientID: '208222066221-lbk84p46tnevf8cpnt7j1vugsrb7uq9j.apps.googleusercontent.com',
        clientSecret: 'UuS0YC0AjxlniRm9qPR5sCWE',
        callbackURL: 'https://www.mookiedough.co/auth/google/callback'
    },
        function (accessToken, refreshToken, profile, done) {
            User.findOne({ email: profile.emails[0].value }).select().exec(function (err, user) {
                if (err) return done(err);

                if (user && user !== null) {
                    done(null, user);
                } else {
                    console.log(profile)
                    var newUser = new User();
                    newUser.email = profile.emails[0].value;
                    newUser.socialToken = accessToken;
                    newUser.username = profile._json.displayName;
                    newUser.temporarytoken = jwt.sign({ username: newUser.username, email: newUser.email }, secret, { expiresIn: '7d' });
                    newUser.password = null;
                    newUser.save(function (err, newUser) {
                        if (err) {
                            return done(err);
                        }

                        if (newUser && newUser != null) {
                            sendRegEmail(newUser.email, newUser.username, newUser.temporarytoken);
                            done(null, newUser);
                        }
                        else {
                            return done(err);
                        }
                    });
                }
            });
        }
    ));

    // Google Routes
    app.get('/auth/google', passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login', 'profile', 'email'] }));
    app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/home' }), function (req, res) {
        res.redirect('/google/' + token);
    });

    // Twitter Routes
    app.get('/auth/twitter', passport.authenticate('twitter', { scope: 'email' }));
    app.get('/auth/twitter/callback', passport.authenticate('twitter', { failureRedirect: '/home' }), function (req, res) {
        res.redirect('/twitter/' + token);
    });

    //Facebbok Routes
    app.get('/auth/facebook', passport.authenticate('facebook', { scope: 'email' }));
    app.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/home' }), function (req, res) {
        res.redirect('/facebook/' + token);
    });

    return passport;
};