'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class phienban extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  phienban.init({
    maSp: DataTypes.STRING,
    imgReview: DataTypes.STRING,
    coTraGop: DataTypes.STRING,
    cost: DataTypes.STRING,
    coGiamGia: DataTypes.STRING,
    discount: DataTypes.STRING,
    Ram: DataTypes.STRING,
    Rom: DataTypes.STRING,
    RomConLai: DataTypes.STRING,
    coGiaMoiSieuHot: DataTypes.STRING,
    giaMoi: DataTypes.STRING,
    coGiamThem: DataTypes.STRING,
    tienGiamThem: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'phienban',
  });
  return phienban;
};