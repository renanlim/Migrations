'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Document extends Model {
    static associate(models) {
    }
  }
  Document.init({
     name: DataTypes.STRING,
    hospitalUnitId: DataTypes.STRING,
    description: DataTypes.STRING,
    type: DataTypes.STRING,
    status: DataTypes.STRING,
    origin: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Document',
  });
  module.exports= Document;
};