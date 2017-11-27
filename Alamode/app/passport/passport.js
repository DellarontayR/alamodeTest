var FacebookStrategy = require('passport-facebook').Strategy; // Import Paspport-Facebook Package
var TwitterStrategy = require('passport-twitter').Strategy; // Import Passport Twitter Package
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy; // Import Passport Google Package
var User = require('../models/user');
var session = require('express-session');
var jwt = require('jsonwebtoken');
var secret = 'zm!_0@0hu_7&ii-@j&0wpm3t%ojnvmjx6j0!1*&j@x51&mdzk@'; // Create custom secret for use in JWT

module.exports = function(app,passport){
    // Start Passport Configuration Settings
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(session({secret: 'mighty',resave:false,saveUninitialized:true,cookie:{secure:false}}));
    //End Passport Configuration Settings

    //Serilize users once logged in
    passport.serializeUser(function(user,done){
        if(user.active){
            if(user.error){
                token = 'unconfirmed/error';
            }
            else{
                token = jwt.sign({username:user.username,email:user.email},secret,{expiresIn:'7d'});
            }
        } else{
            token = 'inactive/error';//If account not active, provide invalid token for use in redirecting later
        }
        done(null,user.id); // Return user object
    });

    passport.deserializeUser(function(id,done){
        User.findById(id,function(err,user){
            done(err,user);
        });
    });

    //Facebook Strategy
    passport.use(new FacebookStrategy({
        clientID: '1755938197781526',
        clientSecret:'540366e787f708849a05cdc15040f50e',
        callbackURL:'https://www.mookiedough.co/auth/facebook/callback',
        profileFields:['id','displayName','photos','email']
        },
        function(accessToken,refreshToken,profile,done){
            User.findOne({email:profile._json.email}).select().exec(function(err,user){
                if(err) done(err);

                if(user && user !=null){
                    done(null,user);
                }
                else{
                    var newUser = new User();
                    
                    newUser.email = profile._json.email;
                    newUser.socialToken = accessToken;
                    newUser.username = profile._json.name;
                    newUser.temporarytoken = jwt.sign({username:newUser.username,email:newUser.email},secret,{expiresIn:'7d'});
                    newUser.save(function(err,newUser){
                        if(err) {
                            return done(err);
                        }

                        if(newUser && newUser!= null){
                            done(null,newUser);
                        }else{
                            return done(err);
                        }
                    });
                }
            });
        }
    ));

    //Twitter Strategy
    passport.use(new TwitterStrategy({
        consumerKey:'bP8DUmlZfFk8WRsm3k2mbfMT0',
        consumerSecret:'nnWVw1LuUGA1oJjZMvKj5i4RPNw2zUxwBbmq6fSytmt9pO1lAn',
        callbackURL: 'https://www.mookiedough.co/auth/twitter/callback',
        userProfileURL: 'https://api.twitter.com/1.1/account/verify_credentials.json?include_email=true'
        },
        function(token,tokenSecret,profile,done){
            console.log('in function');
            console.log(profile);    
            if(profile.emails){
                console.log('true');
            }   
            else{
                console.log('false');
            }     
            if(profile.emails){
                User.findOne({email:profile.emails[0].value}).select().exec(function(err,user){
                    if(err){
                        return done(err);
                    }
                    else{
                        if(user&&user!==null){
                            done(null,user);
                        }
                        else{
                            console.log(profile)
                            var newUser = new User();
                            newUser.email = profile.emails[0].value;
                            newUser.socialToken = token;
                            newUser.username = profile._json.name;
                            newUser.temporarytoken = jwt.sign({username:newUser.username,email:newUser.email},secret,{expiresIn:'7d'});
                            newUser.save(function(err,newUser){
                                if(err) {
                                    return done(err);
                                }
        
                                if(newUser && newUser!= null){
                                    done(null,newUser);
                                }
                                else{
                                    return done(err);
                                }
                            });
                        }
                    }
                });
            }
                else{
                    user={};
                    user.id = 'null';
                    user.active=true;
                    user.error = true;
                    done(null,user);
                }
        }
    ));

    // Google Strategy
    passport.use(new GoogleStrategy({
        clientID: '208222066221-lbk84p46tnevf8cpnt7j1vugsrb7uq9j.apps.googleusercontent.com',
        clientSecret: 'UuS0YC0AjxlniRm9qPR5sCWE',
        callbackURL: 'https://www.mookiedough.co/auth/google/callback'
    },
    function(accessToken,refreshToken,profile,done){
        User.findOne({email:profile.emails[0].value}).select().exec(function(err,user){            
            if(err) return done(err);

            if(user && user!==null){
                 done(null,user);
            } else{
                console.log(profile)
                var newUser = new User();
                newUser.email = profile.emails[0].value;
                newUser.socialToken = accessToken;
                newUser.username = profile._json.displayName;
                newUser.temporarytoken = jwt.sign({username:newUser.username,email:newUser.email},secret,{expiresIn:'7d'});
                newUser.save(function(err,newUser){
                    if(err) {
                        return done(err);
                    }

                    if(newUser && newUser!= null){
                        done(null,newUser);
                    }
                    else{
                        return done(err);
                    }
                });
            }
        });
    }
    ));

    // Google Routes
    app.get('/auth/google',passport.authenticate('google',{scope:['https://www.googleapis.com/auth/plus.login','profile','email']}));
    app.get('/auth/google/callback',passport.authenticate('google',{failureRedirect:'/home'}),function(req,res){
        res.redirect('/google/'+token);
    });

    // Twitter Routes
    app.get('/auth/twitter',passport.authenticate('twitter',{scope:'email'}));
    app.get('/auth/twitter/callback',passport.authenticate('twitter',{failureRedirect:'/home'}),function(req,res){
        res.redirect('/twitter/'+token);
    });

    //Facebbok Routes
    app.get('/auth/facebook',passport.authenticate('facebook',{scope:'email'}));
    app.get('/auth/facebook/callback',passport.authenticate('facebook',{failureRedirect:'/home'}),function(req,res){
        res.redirect('/facebook/'+token);
    });

    return passport;
};