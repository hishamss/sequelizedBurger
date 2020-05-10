var express = require("express");
var db = require("./models");
// var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller");

app.use(routes);

db.sequelize.sync({ force: true }).then(function () {
  app.listen(PORT, () => console.log("Listning on Port: ", PORT));
});
