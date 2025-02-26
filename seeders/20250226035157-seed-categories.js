module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("categorys", [
      {
        id: 101,
        category_name: "Clothing",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 102,
        category_name: "Denim",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 103,
        category_name: "Footwear",
        created_at: new Date(),
        updated_at: new Date(),
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("categorys", null, {});
  }
};
