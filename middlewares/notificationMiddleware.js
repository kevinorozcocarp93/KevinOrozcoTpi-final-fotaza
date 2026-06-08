const { Notification } = require('../models');

module.exports = async (req, res, next) => {

    try {

        if (req.session.usuario) {

            const cantidadNotificaciones =
                await Notification.count({

                    where: {
                        usuario_id:
                            req.session.usuario.id,

                        leida: false
                    }

                });

            res.locals.cantidadNotificaciones =
                cantidadNotificaciones;

        } else {

            res.locals.cantidadNotificaciones = 0;

        }

        next();

    } catch (error) {

        console.log(error);

        res.locals.cantidadNotificaciones = 0;

        next();

    }

};