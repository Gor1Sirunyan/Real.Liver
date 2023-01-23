
const passport = require("passport");
const FacebookStrategy = require('passport-google-oauth20').Strategy;
/*

const configGoogleAuth = () => {

    passport.use(new FacebookStrategy({
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: 'http://localhost:1895/auth/login/google/callback',
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
module.exports = configGoogleAuth;
*/
