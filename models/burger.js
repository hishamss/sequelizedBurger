module.exports = function (sequelize, DataTypes) {
  var Burgers = sequelize.define(
    "Burgers",
    {
      burger_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      devoured: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );

  Burgers.associate = function (models) {
    Burgers.hasMany(models.Customers, {
      onDelete: "cascade",
    });
  };
  return Burgers;
};
