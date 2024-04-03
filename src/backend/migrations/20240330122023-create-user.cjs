'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,allowNull: false,
      },
      name: {
        type: Sequelize.STRING,allowNull: false,
      },
      id: {
        type: Sequelize.INTEGER,allowNull: false,
      },
      leetcode_profile: {
        type: Sequelize.STRING
      },
      linkedin_profile: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      current_company: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};