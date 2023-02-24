'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Nsx extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Nsx.init({
    maNsx: DataTypes.STRING,
    tenNsx: DataTypes.STRING,
    maTb: DataTypes.STRING,
    linkImg: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Nsx',
  });
  return Nsx;
};