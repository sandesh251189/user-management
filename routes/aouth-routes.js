const router = require("express").Router();
const passport=require("passport");
router.get('/login', (req, res) => {
  res.render('login')
})

router.get('/ragister', (req, res) => {
  res.render('ragister')
})


router.get('/logout', (req, res) => {
  res.send("This is Logout Route")
})


router.get('/google',passport.authenticate('google',{
  scope:['profile']
}) )

router.get('/google/redirect',passport.authenticate('google'), (req, res) => {
  res.send("You have reached at calback URI")
})
module.exports = router;
