var FacebookStrategy = require('passport-facebook').Strategy; // Import Paspport-Facebook Package
var TwitterStrategy = require('passport-twitter').Strategy; // Import Passport Twitter Package
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy; // Import Passport Google Package
var User = require('./models/user');
var session = require('express-session');
var jwt = require('jsonwebtoken');
var secret = 'zm!_0@0hu_7&ii-@j&0wpm3t%ojnvmjx6j0!1*&j@x51&mdzk@'; // Create custom secret for use in JWT

module.exports = function(app,passport){
    // Start Passport Configuration Settings
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(session({secret: 'mighty',resave:false,saveUninitialize:true,cookie:{secure:false}}));
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

    passport.deserilizeUser(function(id,done){
        User.findById(id,function(err,user){
            done(err,user);
        });
    });

    //Facebook Strategy
    passport.use(new FacebookStrategy({
        clientID: 'clientID',
        clientSecret:'clientSecret',
        callbackURL:'callbackURL',
        profileFields:['id','displayName','photos','email']
        },
        function(accessToken,refreshToken,profile,done){
            User.findOne({email:profile._json.email}).select().exec(function(err,user){
                if(err) done(err);

                if(user && user !=null){
                    done(null,user);
                }
                else{
                    done(err);
                }
            });
        }
    ));

    //Twitter Strategy
    passport.use(new TwitterStrategy({
        consumerKey:'consumerKey',
        consumerSecret:'consumerSecret',
        callbackURL: 'callbackURL',
        userProfileURL: 'userProfileURL'
    },
        function(token,tokenSecret,profile,done){
            if(profile.emails){
                User.fineOne({email:profile.emails[0].value}).select().exec(function(err,user){
                    if(err){
                        done(err);
                    }else{
                        if(user&&user!==null){
                            done(null,user);
                        }else{
                            done(err);
                        }
                    }
                });
            }else{
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

    },
    function(accessToken,refreshToken,profile,done){
        User.findOne({email:profile.emails[0].value}).select().exec(function(err,user){
            if(err) done(err);

            if(user && user!==null){
                done(null,user);
            } else{
                done(err);
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
    app.get('/auth/twitter',passport.authenticate('twitter'));
    app.get('/auth/twitter/callback',passport.authenticate('twitter',{failureRedirect:'/home'}),function(req,res){
        res.redirect('/twitter/'+token);
    });

    //Facebbok Routes
    app.get('/auth/facebook/callback',passport.authenticate('facebook',{failureRedirect:'/home'}),function(req,res){
        res.redirect('/facebook/'+token);
    });
    app.get('/auth/facebook',passport.authenticate('facebook',{scope:'email'}));

    return passport;
};