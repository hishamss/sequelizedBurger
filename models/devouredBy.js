module.exports = function (sequelize, DataTypes) {
  var Customers = sequelize.define(
    "Customers",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      burger_name: DataTypes.STRING,
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );

  Customers.associate = function (models) {
    Customers.belongsTo(models.Burgers, {
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return Customers;
};
