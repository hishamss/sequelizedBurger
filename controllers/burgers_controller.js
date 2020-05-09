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
  db.burgers
    .create({
      burger_name: req.body.newburger,
    })
    .then(function (result) {
      res.status(200).end();
    });
});

router.put("/api/burger/:id", function (req, res) {
  db.burgers
    .update(
      {
        devoured: true,
      },
      {
        where: { id: req.params.id },
      }
    )
    .then(function () {
      res.status(200).end();
    });
});

router.delete("/api/burger/:id", function (req, res) {
  db.burgers
    .destroy({
      where: { id: req.params.id },
    })
    .then(function () {
      res.status(200).end();
    });
});
module.exports = router;
