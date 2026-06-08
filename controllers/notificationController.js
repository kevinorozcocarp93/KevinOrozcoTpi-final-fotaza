const { Notification } = require('../models');

exports.listar = async (req, res) => {

    try {

        const usuarioId =
            req.session.usuario.id;

        await Notification.update(

            {
                leida: true
            },

            {
                where: {
                    usuario_id: usuarioId,
                    leida: false
                }
            }

        );

        const notificaciones =
            await Notification.findAll({

                where: {
                    usuario_id: usuarioId
                },

                order: [
                    ['createdAt', 'DESC']
                ]

            });

        res.render(
            'notificaciones/index',
            {
                notificaciones
            }
        );

    } catch (error) {

        console.log(error);

        res.send(
            'Error al cargar notificaciones'
        );

    }

};