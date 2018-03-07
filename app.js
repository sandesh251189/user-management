var express=require("express");
var authRoutes=require("./routes/aouth-routes");
const passportSetup = require('./config/passport-setup');
var app=express();

//Set View engine
app.set('view engine','ejs')
// set up routes

app.use('/auth', authRoutes);

//Seting route for index
app.get('/',(req,res)=>{
  res.render('home')
})


//runing app on port 3000
app.listen(3000,()=>{
  console.log("App is useing port 3000")
});
