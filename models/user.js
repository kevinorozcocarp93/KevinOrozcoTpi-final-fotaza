'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.Role, {
      foreignKey: 'rol_id'
});
    User.hasMany(models.Post, {
    foreignKey: 'usuario_id'
});

    User.hasMany(models.Comment, {
    foreignKey: 'usuario_id'
});

    User.hasMany(models.Like, {
    foreignKey: 'usuario_id'
});
    User.hasMany(models.Follow, {
    foreignKey: 'seguidor_id',
    as: 'Siguiendo'
});

User.hasMany(models.Follow, {
    foreignKey: 'seguido_id',
    as: 'Seguidores'
});
User.hasMany(models.Notification, {
    foreignKey: 'usuario_id'
});
  }
  }
  User.init({
    nombre: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    foto_perfil: DataTypes.STRING,
    bio: DataTypes.TEXT,
    activo: DataTypes.BOOLEAN,
    rol_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};