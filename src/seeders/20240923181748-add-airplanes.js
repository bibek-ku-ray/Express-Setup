"use strict";

const { Op } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */

        await queryInterface.bulkInsert("Airplanes", [
            {
                modelNumber: "Yeti E410",
                capacity: 65,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                modelNumber: "Yeti E420",
                capacity: 45,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete(
          "Airplanes", 
          {
            [Op.or]: [
                { modelNumber: "Yeti E410" },
                { modelNumber: "Yeti E420" },
            ],
        });
    },
};
