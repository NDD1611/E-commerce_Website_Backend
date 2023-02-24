'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class loaisp extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  loaisp.init({
    maTb: DataTypes.STRING,
    tenTb: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'loaisp',
  });
  return loaisp;
};