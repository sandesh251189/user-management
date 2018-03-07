var passport = require("passport");
var GoogleStrategy = require("passport-google-oauth20");
var keys = require("./keys")
passport.use(
  new GoogleStrategy({
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret,
    callbackURL: '/auth/google/redirect'
  }, (accessToken, refreshToken, profile, done) => {
    console.log("Passport callback");
       console.log(profile);
  })
);
