'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transfer extends Model {
    static associate(models) {
    }
  }
  Transfer.init({
    id: DataTypes.STRING,
    patient: DataTypes.STRING,
    doctor: DataTypes.STRING,
    appointment: DataTypes.STRING,
    insurance: DataTypes.STRING,
    protocol: DataTypes.STRING,
    totalCost: DataTypes.STRING,
    documentId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Transfer',
  });
  return Transfer;
};