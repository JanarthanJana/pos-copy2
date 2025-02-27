module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    "Order",
    {
      order_no: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      customer_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      order_Total_price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      total_price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    },
    {
      timestamps: true, // ✅ Enable timestamps
      createdAt: "created_at", // ✅ Map createdAt to created_at
      updatedAt: "updated_at", // ✅ Map updatedAt to updated_at
    }
  );

  return Order;
};
