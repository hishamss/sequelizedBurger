module.exports = function (sequelize, DataTypes) {
  var Customers = sequelize.define(
    "Customers",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        validate: {
          len: [1],
        },
      },
      burger_name: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
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
