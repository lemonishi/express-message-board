var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

router.get("/new", function (req, res, next) {
  res.render("form", { title: "Mini Messageboard Form" });
});

router.post("/submit", function (req, res, next) {
  const newMessage = {
    text: req.body.text,
    user: req.body.user,
    added: new Date(),
  };
  messages.push(newMessage);
  res.redirect("/");
});

module.exports = router;
