const express = require("express");
const router = express.Router();

function routes(app) {
  router.get("/", (req, res) => {
    if (req.user) {
      res.redirect("/profile");
    } else {
      app.render(req, res, "/", {
        "auth": false,
        "username": "",
        "imgId": ""
      });
    };
  });
  router.get("/profile", (req, res) => {
    if (req.user) {
      app.render(req, res, "/profile", {
        "auth": true,
        "username": req.user.username,
        "imgId": req.user.profileImg[0].imgId
      });
    } else {
      res.redirect("/");
    };
  });
  router.get("/about", (req, res) => {
    if (req.user) {
      app.render(req, res, "/", {
        "auth": true,
        "username": req.user.username,
        "imgId": req.user.profileImg[0].imgId
      });
    } else {
      res.redirect("/");
    };
  });
  return router;
};
module.exports = routes;