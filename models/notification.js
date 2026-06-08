'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

    class Notification extends Model {

        static associate(models) {

            Notification.belongsTo(
                models.User,
                {
                    foreignKey: 'usuario_id'
                }
            );

        }

    }

    Notification.init({

        mensaje: DataTypes.STRING,

        leida: DataTypes.BOOLEAN,

        usuario_id: DataTypes.INTEGER

    }, {

        sequelize,

        modelName: 'Notification',

    });

    return Notification;

};