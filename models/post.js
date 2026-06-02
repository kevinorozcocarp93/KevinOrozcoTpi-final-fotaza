'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  static associate(models) {

    Post.belongsTo(models.User, {
        foreignKey: 'usuario_id'
    });

    Post.hasMany(models.Comment, {
        foreignKey: 'post_id'
    });


}
  }
  Post.init({
    titulo: DataTypes.STRING,
    descripcion: DataTypes.TEXT,
    imagen: DataTypes.STRING,
    fecha_publicacion: DataTypes.DATE,
    usuario_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};