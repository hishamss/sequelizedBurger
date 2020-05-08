var orm = require("../config/orm");

var burger = {
  all: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },
  add: function (tablename, colname, value, cb) {
    orm.insertOne(tablename, colname, value, function (res) {
      cb(res);
    });
  },
  update: function (tablename, colname, id, cb) {
    orm.updateOne(tablename, colname, id, function (res) {
      cb(res);
    });
  },
  delete: function (tablename, id, cb) {
    orm.deleteone(tablename, id, function (res) {
      cb(res);
    });
  },
};

module.exports = burger;
