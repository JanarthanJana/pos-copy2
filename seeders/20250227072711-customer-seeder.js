"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("customers", [
      {
        customer_name: "John Doe",
        customer_phoneno: "1234567890",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        customer_name: "Jane Smith",
        customer_phoneno: "0987654321",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        customer_name: "Alice Johnson",
        customer_phoneno: "1122334455",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        customer_name: "Bob Williams",
        customer_phoneno: "5566778899",
        created_at: new Date(),
        updated_at: new Date(),
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("customers", null, {});
  },
};
