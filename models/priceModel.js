module.exports = (sequelize, DataTypes) => {
  const Price = sequelize.define(
    "Price",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      product_id: { type: DataTypes.INTEGER, allowNull: false },
      Sellingprice: { type: DataTypes.FLOAT, allowNull: false },
      barcode_id: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      tableName: "price",
      timestamps: false,
    }
  );

  Price.associate = (models) => {
    Price.belongsTo(models.Barcode, { foreignKey: "barcode_id" });
    Price.belongsTo(models.Product, { foreignKey: "product_id" });
  };

  return Price;
};
