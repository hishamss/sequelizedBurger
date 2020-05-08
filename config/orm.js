var connection = require("./connection");

var orm = {
  selectAll: function (tablename, cb) {
    connection.query("select * from ??;", [tablename], function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  insertOne: function (tablename, ColName, value, cb) {
    var sqlquery = "insert into ?? (??) value (?)";
    connection.query(sqlquery, [tablename, ColName, value], function (
      err,
      result
    ) {
      if (err) throw err;
      cb(result);
    });
  },
  updateOne: function (tablename, colname, id, cb) {
    connection.query(
      "update ?? set ?? = 1 where id = ?",
      [tablename, colname, id],
      function (err, result) {
        if (err) throw err;
        cb(result);
      }
    );
  },
  deleteone: function (tablename, id, cb) {
    connection.query("delete from ?? where id = ?", [tablename, id], function (
      err,
      result
    ) {
      if (err) throw err;
      cb(result);
    });
  },
};

module.exports = orm;
