'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("products", [
      {
        id: 1,
        name: "T-Shirt",
        description: "Cotton round-neck T-shirt",
        category_id: 101,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        name: "Jeans",
        description: "Slim-fit blue jeans",
        category_id: 102,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 3,
        name: "Sneakers",
        description: "White sports sneakers",
        category_id: 103,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("products", null, {});
  }
};
