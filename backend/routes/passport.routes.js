// NPM modules
const express = require("express"); // Node framework
const passport = require("passport"); // For authentication
const router = express.Router();  // Router method
const {
  facebook,
  google,
} = require("../controllers/passport.controller.js"); // Controller of passport routes

// ------------- Routes -------------
// Facebook
router.get("/facebook", facebook);
router.get("/facebook/callback", passport.authenticate("facebook"), (req, res) => {
  res.redirect("/"); // Lo manda a la página principal
});

// Google
router.get("/google", google);
router.get("/google/callback", passport.authenticate("google"), (req, res) => {
  res.redirect("/"); // Lo manda a la página principal
});

// Logout
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/"); // Lo manda a la página principal
});

module.exports = router;