'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('phienbans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      maSp: {
        type: Sequelize.STRING
      },
      imgReview: {
        type: Sequelize.STRING
      },
      coTraGop: {
        type: Sequelize.STRING
      },
      cost: {
        type: Sequelize.STRING
      },
      coGiamGia: {
        type: Sequelize.STRING
      },
      discount: {
        type: Sequelize.STRING
      },
      Ram: {
        type: Sequelize.STRING
      },
      Rom: {
        type: Sequelize.STRING
      },
      RomConLai: {
        type: Sequelize.STRING
      },
      coGiaMoiSieuHot: {
        type: Sequelize.STRING
      },
      giaMoi: {
        type: Sequelize.STRING
      },
      coGiamThem: {
        type: Sequelize.STRING
      },
      tienGiamThem: {
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
    await queryInterface.dropTable('phienbans');
  }
};