const router = require("express").Router();
const burger = require("../models/burger");

router.get("/", (req, res) => {
  burger.all((burgers) => {
    const data = { burgers };
    res.render("index", data);
  });
});

module.exports = router;
