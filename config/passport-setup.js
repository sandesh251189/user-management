const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const keys = require("./keys");
const User = require('../models/user-models');
passport.use(
  new GoogleStrategy({
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret,
    callbackURL: '/auth/google/redirect'
  }, (accessToken, refreshToken, profile, done) => {
    console.log("Passport callback");
       console.log(profile);
       new User({
           googleId: profile.id,
           username: profile.displayName
       }).save().then((newUser) => {
           console.log('new user created: ', newUser);
       });
  })
);
