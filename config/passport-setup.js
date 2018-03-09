const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const keys = require("./keys");
const User = require('../models/user-models');
passport.serializeUser((user,done)=>{
  done(null,user.id);
  //console.log("User Id" + user.id + " Googlr Id" + user.googleId)
});
passport.deserializeUser((id,done)=>{
  User.findById(id).then((user)=>{
      done(null,user);
  })
})

passport.use(
  new GoogleStrategy({
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret,
    callbackURL: '/auth/google/redirect'
  }, (accessToken, refreshToken, profile, done) => {
    User.findOne({googleId:profile.id}).then((curentUser)=>{
if(curentUser){
  console.log("user is" + curentUser)
    done(null,curentUser);
}else{
  new User({
      googleId: profile.id,
      username: profile.displayName
  }).save().then((newUser) => {
      console.log('new user created: ', newUser);
          done(null,newUser);
  });
}
    })
    console.log("Passport callback");
    console.log(profile);

  })
);
