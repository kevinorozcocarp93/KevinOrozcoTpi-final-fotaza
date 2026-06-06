'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Follow extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

  Follow.belongsTo(models.User, {
    foreignKey: 'seguidor_id'
  });

  Follow.belongsTo(models.User, {
    foreignKey: 'seguido_id'
  });

  }
  }
  Follow.init({
    seguidor_id: DataTypes.INTEGER,
    seguido_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Follow',
  });
  return Follow;
};