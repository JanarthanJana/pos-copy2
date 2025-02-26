"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("sizes", [
      {
        id: 1,
        size: "Small",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        size: "Medium",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 3,
        size: "Large",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 4,
        size: "X-Large",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("sizes", null, {});
  },
};
module.exports = {
  async up(queryInterface, Sequelize) {
    const sizes = [
      { id: 1, size: "Small" },
      { id: 2, size: "Medium" },
      { id: 3, size: "Large" },
      { id: 4, size: "X-Large" },
    ];

    const timestamps = {
      created_at: new Date(),
      updated_at: new Date(),
    };

    return queryInterface.bulkInsert("sizes", sizes.map((size) => ({ ...size, ...timestamps })));
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("sizes", null, {});
  },
};