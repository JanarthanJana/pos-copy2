"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("barcodes", [
      {
        id: 1,
        barcode_no: "111",
        barcode_image: "barcodes/tshirt.png",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        barcode_no: "122",
        barcode_image: "barcodes/jeans.png",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 3,
        barcode_no: "133",
        barcode_image: "barcodes/sneakers.png",
        created_at: new Date(),
        updated_at: new Date(),
      },
      ,
      {
        id: 4,
        barcode_no: "146",
        barcode_image: "barcodes/sneakers.png",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("barcodes", null, {});
  },
};
