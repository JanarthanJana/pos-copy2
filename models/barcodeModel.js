module.exports = (sequelize, DataTypes) => {
  const Barcode = sequelize.define(
    "Barcode",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      barcode_no: { type: DataTypes.STRING, allowNull: false, unique: true },
    },
    {
      tableName: "barcodes",
      timestamps: false,
    }
  );

  Barcode.associate = (models) => {
    Barcode.hasOne(models.Price, { foreignKey: "barcode_id" });
  };

  return Barcode;
};
