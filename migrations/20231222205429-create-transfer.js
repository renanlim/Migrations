'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('transfers', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      patient: {
        type: Sequelize.STRING
      },
      doctor: {
        type: Sequelize.STRING
      },
      appointment: {
        type: Sequelize.STRING
      },
      insurance: {
        type: Sequelize.STRING
      },
      protocol: {
        type: Sequelize.STRING
      },
      totalCost: {
        type: Sequelize.STRING
      },
      documentId: {
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
    await queryInterface.dropTable('transfers');
  }
};