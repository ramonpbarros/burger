const router = require("express").Router();
const burger = require("../models/burger");

router.get("/", (req, res) => {
  burger.all((burgers) => {
    const data = { burgers };
    res.render("index", data);
  });
});

router.post("/api/burgers", (req, res) => {
  burger.create(
    { burger_name: req.body.burger_name, devoured: req.body.devoured },
    (result) => {
      res.json(result);
    }
  );
});

router.put("/api/burgers/:id", (req, res) => {
  console.log(req.body.devoured, req.params.id);
  burger.update(
    { devoured: req.body.devoured },
    { id: req.params.id },
    (result) => {
      if (result.affectedRows === 0) {
        // If no rows were affected, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

module.exports = router;
