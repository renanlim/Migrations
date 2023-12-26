'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HospitalUnit extends Model {
    static associate(models) {
    }
  }
  HospitalUnit.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'HospitalUnit',
  });
  return HospitalUnit;
};