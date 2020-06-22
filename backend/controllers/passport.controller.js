// NPM modules
const passport = require("passport"); // For authentication

const passportCtrl = {};  // Our object that contains all methods

// Facebook
passportCtrl.facebook = passport.authenticate("facebook");

// Google
passportCtrl.google = passport.authenticate("google", {
  scope: ["profile", "email"]
});

module.exports = passportCtrl;