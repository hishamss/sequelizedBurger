var express = require("express");
var burger = require("../models/burger");
var router = express.Router();

router.get("/", function (req, res) {
  burger.all(function (data) {
    // console.log(data);
    res.render("index", { burger: data });
  });
});

router.post("/api/burger", function (req, res) {
  burger.add("burgers", "burger_name", req.body.newburger, function (result) {
    res.json({ id: result.insertId });
  });
});

router.put("/api/burger/:id", function (req, res) {
  burger.update("burgers", "devoured", req.params.id, function (result) {
    if (result.changedRows === 0) {
      return res.status(404).end();
    }
    res.status(200).end();
  });
});

router.delete("/api/burger/:id", function (req, res) {
  burger.delete("burgers", req.params.id, function (result) {
    res.status(200).end();
  });
});
module.exports = router;
