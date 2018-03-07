const express=require("express");
const mongoose = require('mongoose');
const authRoutes=require("./routes/aouth-routes");
const passportSetup = require('./config/passport-setup');
const keys = require("./config/keys")
const app=express();

//Set View engine
app.set('view engine','ejs')
// set up routes

//mongo connect
mongoose.connect(keys.mongodb.dbURI,()=>{
  console.log("mongo has been connect")
})


app.use('/auth', authRoutes);

//Seting route for index
app.get('/',(req,res)=>{
  res.render('home')
})


//runing app on port 3000
app.listen(3000,()=>{
  console.log("App is useing port 3000")
});
