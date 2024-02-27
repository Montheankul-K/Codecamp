module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    "Account",
    {
      value: {
        type: DataTypes.FLOAT,
      },
    },
    {
      tableName: "accounts",
      timestamps: false,
    }
  );

  model.associate = (models) => {
    model.belongsTo(models.Branch, {
      forifeignKey: "branch_id",
    });

    model.belongsToMany(models.Customer, {
      through: models.Owns,
      forifeignKey: "account_id",
    });
  };

  return model;
};
