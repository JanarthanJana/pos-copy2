// const { DataTypes } = require("sequelize");
// const sequelize = require("../db");

// const User = sequelize.define("User", {
//   id: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     primaryKey: true,
//   },
//   name: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true,
//     validate: {
//       isEmail: true,
//     },
//   },
//   email_verified_at: {
//     type: DataTypes.DATE,
//     allowNull: true,
//   },
//   password: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   role: {
//     type: DataTypes.ENUM("admin", "user"), // Customize roles as needed
//     defaultValue: "user",
//   },
//   remember_token: {
//     type: DataTypes.STRING,
//     allowNull: true,
//   },
//   created_at: {
//     type: DataTypes.DATE,
//     defaultValue: DataTypes.NOW,
//   },
//   updated_at: {
//     type: DataTypes.DATE,
//     defaultValue: DataTypes.NOW,
//   },
// }, {
//   tableName: "users",
//   timestamps: true, // Enables automatic createdAt and updatedAt handling
//   underscored: true, // Maps camelCase to snake_case column names
// });

// module.exports = User;
