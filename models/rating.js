'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

    class Rating extends Model {

        static associate(models) {

            Rating.belongsTo(models.User, {
                foreignKey: 'usuario_id'
            });

            Rating.belongsTo(models.Post, {
                foreignKey: 'post_id'
            });

        }

    }

    Rating.init({

        valor: DataTypes.INTEGER,

        usuario_id: DataTypes.INTEGER,

        post_id: DataTypes.INTEGER

    }, {

        sequelize,

        modelName: 'Rating'

    });

    return Rating;

};