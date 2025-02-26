"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("colors", [
      {
        id: 1,
        colour_name: "Red",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        colour_name: "Blue",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 3,
        colour_name: "Black",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 4,
        colour_name: "White",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 5,
        colour_name: "Grey",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 6,
        colour_name: "Green",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 7,
        colour_name: "Brown",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 8,
        colour_name: "Navy Blue",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("colors", null, {});
  },
};
