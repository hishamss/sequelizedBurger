var express = require("express");
var db = require("../models");
var router = express.Router();

router.get("/", function (req, res) {
  db.Burgers.findAll({
    include: [
      {
        model: db.Customers,
        order: [["burger_name", "ASC"]],
      },
    ],
    order: [["burger_name", "ASC"]],
  }).then(function (result) {
    var resArray = [];
    // convert sequelize response to array redered by handlebars
    for (row of result) {
      resArray.push(row.dataValues);
    }
    var resData = [];
    for (row of result) {
      //  resData.push(row.Customers);

      for (row1 of row.Customers) {
        resData.push(row1.dataValues);
      }
    }
    res.render("index", { burger: resArray, cutomers: resData });
  });
});

router.post("/api/burger", function (req, res) {
  db.Burgers.create({
    burger_name: req.body.newburger,
  })
    .then(function (result) {
      res.send(true);
    })
    .catch(function () {
      res.send(false);
    });
});

router.put("/api/burger/:id", function (req, res) {
  db.Customers.create({
    name: req.body.name,
    burger_name: req.body.burger_name,
    BurgerId: req.body.BurgerId,
  })
    .then(function () {
      db.Burgers.update(
        {
          devoured: true,
        },
        {
          where: { id: req.params.id },
        }
      ).then(function () {});
      res.send(true);
    })
    .catch(function (err) {
      // if there is doublicates in customers table
      res.send(false);
    });
});

router.delete("/api/burger/:id", function (req, res) {
  db.Burgers.destroy({
    where: { id: req.params.id },
  }).then(function () {
    res.status(200).end();
  });
});
module.exports = router;
