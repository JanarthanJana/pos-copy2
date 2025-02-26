"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("price", [
      // T-Shirts
      {
        id: 1,
        product_id: 1, // T-Shirt
        Costprice: 500,
        Sellingprice: 800,
        size_id: 1, // Small
        color_id: 1, // Red
        barcode_id: 1,
        quantity: 50,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        product_id: 1, // T-Shirt
        Costprice: 550,
        Sellingprice: 850,
        size_id: 2, // Medium
        color_id: 2, // Blue
        barcode_id: 2,
        quantity: 40,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 3,
        product_id: 1, // T-Shirt
        Costprice: 600,
        Sellingprice: 900,
        size_id: 3, // Large
        color_id: 3, // Black
        barcode_id: 3,
        quantity: 35,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("price", null, {});
  },
};
