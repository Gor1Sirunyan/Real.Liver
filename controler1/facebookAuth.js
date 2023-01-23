
const passport = require("passport");
const FacebookStrategy = require('passport-facebook').Strategy;

/*
const configFacebookAuth = () => {

    passport.use(new FacebookStrategy({
            clientID: process.env.FACEBOOK_APP_ID,
            clientSecret: process.env.FACEBOOK_APP_SECRET,
            callbackURL: "http://localhost:1895/auth/login/facebook/callback"
        },
        function (accessToken, refreshToken, profile, done) {
            return done(null, profile)
        } .catch((err) => {
            console.log("err", err)
        })

    ));

    // Passport session setup.
    passport.serializeUser(function (user, done) {
        done(null, user);
    });

    passport.deserializeUser(function (id, done) {
        done(null, id);
    });
};
module.exports = configFacebookAuth;
*/
