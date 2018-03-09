const router = require("express").Router();
const passport=require("passport");
router.get('/login', (req, res) => {
  res.render('login')
})

router.get('/ragister', (req, res) => {
  res.render('ragister')
})


router.get('/logout', (req, res) => {
//  res.send("This is Logout Route");
req.logout();
res.render('home')
})


router.get('/google',passport.authenticate('google',{
  scope:['profile']
}) )

router.get('/google/redirect',passport.authenticate('google'), (req, res) => {
  //res.send("You are loged in with user : " + req.user.username);
  res.redirect('/profile/')
})
module.exports = router;
