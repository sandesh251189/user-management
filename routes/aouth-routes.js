var router = require("express").Router();

router.get('/login',(req,res)=>{
res.send("This is Login Route")
})


router.get('/logout',(req,res)=>{
res.send("This is Logout Route")
})


router.get('/google',(req,res)=>{
res.send("This is google Route")
})

module.exports=router;
