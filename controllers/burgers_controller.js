const router = require("express").Router();
const burger = require("../models/burger");

router.get("/", (req, res) => {
  burger.all((burgers) => {
    const data = { burgers };
    res.render("index", data);
  });
});

router.post("/api/burgers", (req, res) => {
  const newBurger = req.body.burger_name;
  burger.create(newBurger, (result) => {
    res.json(result);
  });
});

module.exports = router;
