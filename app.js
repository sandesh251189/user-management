const express = require("express");
const mongoose = require('mongoose');
const authRoutes = require("./routes/aouth-routes");
const passportSetup = require('./config/passport-setup');
const keys = require("./config/keys");
const cookieSession = require("cookie-session");
const passport = require("passport");
const app = express();

//Set View engine
app.set('view engine', 'ejs')
// set up routes

app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys:[keys.session.cookeiKey]
}))

app.use(passport.initialize());
app.use(passport.session());

//mongo connect
mongoose.connect(keys.mongodb.dbURI, () => {
  console.log("mongo has been connect")
})


app.use('/auth', authRoutes);

//Seting route for index
app.get('/', (req, res) => {
  res.render('home')
})


//runing app on port 3000
app.listen(3000, () => {
  console.log("App is useing port 3000")
});
