'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sanpham extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  sanpham.init({
    maSp: DataTypes.STRING,
    tenSp: DataTypes.STRING,
    maNsx: DataTypes.STRING,
    loaiDT: DataTypes.STRING,
    linkInfo: DataTypes.STRING,
    kichThuocManHinh: DataTypes.STRING,
    congNgheManHinh: DataTypes.STRING,
    tamNenManHinh: DataTypes.STRING,
    doPhanGiai: DataTypes.STRING,
    tanSoQuet: DataTypes.STRING,
    doSangToiDa: DataTypes.STRING,
    matCamUng: DataTypes.STRING,
    doPhanGiaiCameraSau: DataTypes.STRING,
    denFlash: DataTypes.STRING,
    listQp: DataTypes.TEXT,
    listTinhNangCameraSau: DataTypes.TEXT,
    listOptWifi: DataTypes.TEXT,
    listOptGPS: DataTypes.TEXT,
    listOptCongNghePin: DataTypes.TEXT,
    listOptNgheNhac: DataTypes.TEXT,
    listOptXemPhim: DataTypes.TEXT,
    listOptTNDacBiet: DataTypes.TEXT,
    listTinhNangCameraTruoc: DataTypes.TEXT,
    doPhanGiaiCameraTruoc: DataTypes.STRING,
    heDieuHanh: DataTypes.STRING,
    CPU: DataTypes.STRING,
    tocDoCPU: DataTypes.STRING,
    GPU: DataTypes.STRING,
    RomConLai: DataTypes.STRING,
    danhBa: DataTypes.STRING,
    mangDiDong: DataTypes.STRING,
    sim: DataTypes.STRING,
    blueTooth: DataTypes.STRING,
    connectGate: DataTypes.STRING,
    jackHeadPhone: DataTypes.STRING,
    connectOther: DataTypes.STRING,
    capacityPin: DataTypes.STRING,
    loaiPin: DataTypes.STRING,
    hoTroSac: DataTypes.STRING,
    baoMat: DataTypes.STRING,
    khangNuoc: DataTypes.STRING,
    ghiAm: DataTypes.STRING,
    thietKe: DataTypes.STRING,
    chatLieu: DataTypes.STRING,
    chieuDai: DataTypes.STRING,
    chieuNgang: DataTypes.STRING,
    doDay: DataTypes.STRING,
    trongLuong: DataTypes.STRING,
    thoiDiemRaMat: DataTypes.STRING,
    baoHanh: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'sanpham',
  });
  return sanpham;
};