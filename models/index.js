const { Sequelize, DataTypes } = require("sequelize");
const config = require("../config/config.json")["development"];

const sequelize = new Sequelize(config);

const db = {};

// Import models
db.Product = require("./productModel")(sequelize, DataTypes);
db.Barcode = require("./barcodeModel")(sequelize, DataTypes);
db.Price = require("./priceModel")(sequelize, DataTypes);
db.Order = require("./orderModel")(sequelize, DataTypes);

// Define associations
db.Product.hasMany(db.Price, { foreignKey: "product_id" });
db.Price.belongsTo(db.Product, { foreignKey: "product_id" });

db.Barcode.hasOne(db.Price, { foreignKey: "barcode_id" });
db.Price.belongsTo(db.Barcode, { foreignKey: "barcode_id" });

db.Product.hasMany(db.Order, { foreignKey: "product_id" }); //  Link Order to Product
db.Order.belongsTo(db.Product, { foreignKey: "product_id" });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
