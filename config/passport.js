let passport = require('passport');
let User = require('../models/user');
let LocalStrategy = require('passport-local').Strategy;

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id).exec()
        .then(function(user) {
            done(user);
        });
});

    // Creation of an user
passport.use('local.signup', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    },
    function(req, email, password, done){
        User.findOne({'email': email}).exec()
            .then(function(user) {
                if(user){
                    return done(null, false, {message: 'Email is already in use'});
                }
                else{
                    let newUser = new User();

                    newUser.email = email;
                    newUser.password = newUser.encryptPassword(password);

                    return newUser.save()
                        .then(function() {
                            done(null, newUser);
                        });
                }
            })
            .catch(function(err) {
                done(err);
            });
    }
));