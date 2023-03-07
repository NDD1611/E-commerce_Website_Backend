'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sanphams', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      maSp: {
        type: Sequelize.STRING
      },
      tenSp: {
        type: Sequelize.STRING
      },
      maNsx: {
        type: Sequelize.STRING
      },
      loaiDT: {
        type: Sequelize.STRING
      },
      linkInfo: {
        type: Sequelize.STRING
      },
      kichThuocManHinh: {
        type: Sequelize.STRING
      },
      congNgheManHinh: {
        type: Sequelize.STRING
      },
      tamNenManHinh: {
        type: Sequelize.STRING
      },
      doPhanGiai: {
        type: Sequelize.STRING
      },
      tanSoQuet: {
        type: Sequelize.STRING
      },
      doSangToiDa: {
        type: Sequelize.STRING
      },
      matCamUng: {
        type: Sequelize.STRING
      },
      doPhanGiaiCameraSau: {
        type: Sequelize.STRING
      },
      denFlash: {
        type: Sequelize.STRING
      },
      listQp: {
        type: Sequelize.TEXT
      },
      listTinhNangCameraSau: {
        type: Sequelize.TEXT
      },
      listOptWifi: {
        type: Sequelize.TEXT
      },
      listOptGPS: {
        type: Sequelize.TEXT
      },
      listOptCongNghePin: {
        type: Sequelize.TEXT
      },
      listOptNgheNhac: {
        type: Sequelize.TEXT
      },
      listOptXemPhim: {
        type: Sequelize.TEXT
      },
      listOptTNDacBiet: {
        type: Sequelize.TEXT
      },
      listTinhNangCameraTruoc: {
        type: Sequelize.TEXT
      },
      doPhanGiaiCameraTruoc: {
        type: Sequelize.STRING
      },
      heDieuHanh: {
        type: Sequelize.STRING
      },
      CPU: {
        type: Sequelize.STRING
      },
      tocDoCPU: {
        type: Sequelize.STRING
      },
      GPU: {
        type: Sequelize.STRING
      },
      RomConLai: {
        type: Sequelize.STRING
      },
      danhBa: {
        type: Sequelize.STRING
      },
      mangDiDong: {
        type: Sequelize.STRING
      },
      sim: {
        type: Sequelize.STRING
      },
      blueTooth: {
        type: Sequelize.STRING
      },
      connectGate: {
        type: Sequelize.STRING
      },
      jackHeadPhone: {
        type: Sequelize.STRING
      },
      connectOther: {
        type: Sequelize.STRING
      },
      capacityPin: {
        type: Sequelize.STRING
      },
      loaiPin: {
        type: Sequelize.STRING
      },
      hoTroSac: {
        type: Sequelize.STRING
      },
      baoMat: {
        type: Sequelize.STRING
      },
      khangNuoc: {
        type: Sequelize.STRING
      },
      ghiAm: {
        type: Sequelize.STRING
      },
      thietKe: {
        type: Sequelize.STRING
      },
      chatLieu: {
        type: Sequelize.STRING
      },
      chieuDai: {
        type: Sequelize.STRING
      },
      chieuNgang: {
        type: Sequelize.STRING
      },
      doDay: {
        type: Sequelize.STRING
      },
      trongLuong: {
        type: Sequelize.STRING
      },
      thoiDiemRaMat: {
        type: Sequelize.STRING
      },
      baoHanh: {
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
    await queryInterface.dropTable('sanphams');
  }
};