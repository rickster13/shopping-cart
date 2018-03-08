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
passport.use('local', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    },
    function(req, email, password, done) {
        User.findOne({'email': email})
            .exec()
            .then(existingUser => {
                if (existingUser) {
                    return Promise.resolve(done(null, false, { message: 'Email is already in use' }));
                } else {
                    const user = new User();
                    user.email = email;
                    return user.encryptPassword(password)
                        .then(encryptedPass => {
                            user.password = encryptedPass;
                            return user;
                        })
                        .then(user => user.save())
                        .then(user => done(null, user));
                }
            }).catch(done);
    }));
