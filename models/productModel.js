module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Product",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: DataTypes.STRING, allowNull: false },
    },
    {
      tableName: "products",
      timestamps: false,
    }
  );

  Product.associate = (models) => {
    Product.hasMany(models.Price, { foreignKey: "product_id" });
  };

  return Product;
};
