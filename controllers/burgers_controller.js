var express = require("express");
var db = require("../models");
var router = express.Router();

router.get("/", function (req, res) {
  db.burgers.findAll({}).then(function (result) {
    var resArray = [];
    // convert sequelize response to array redered by handlebars
    for (row of result) {
      resArray.push(row.dataValues);
    }
    res.render("index", { burger: resArray });
  });
});

router.post("/api/burger", function (req, res) {
  db.Burger.create({
    burger_name: req.body.newburger,
  }).then(function (result) {
    res.json({ id: result.insertId });
  });
});

// router.put("/api/burger/:id", function (req, res) {
//   burger.update("burgers", "devoured", req.params.id, function (result) {
//     if (result.changedRows === 0) {
//       return res.status(404).end();
//     }
//     res.status(200).end();
//   });
// });

// router.delete("/api/burger/:id", function (req, res) {
//   burger.delete("burgers", req.params.id, function (result) {
//     res.status(200).end();
//   });
// });
module.exports = router;
