require("dotenv").config(); // Load environment variables

const { Sequelize } = require("sequelize");

// Set up a connection to MySQL using environment variables
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    logging: process.env.DB_LOGGING === "true", // Convert string to boolean
    port: process.env.DB_PORT || 3306, // Default MySQL port is 3306
  }
);

module.exports = sequelize;