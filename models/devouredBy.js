module.exports = function (sequelize, DataTypes) {
  var customers = sequelize.define(
    "customers",
    {
      name: DataTypes.STRING,
      burger_name: DataTypes.STRING,
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
  return customers;
};
