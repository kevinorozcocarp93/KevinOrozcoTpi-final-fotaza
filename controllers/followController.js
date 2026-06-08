const { Follow, Notification } = require('../models');

exports.followUser = async (req, res) => {

    try {

        const seguidor_id = req.session.usuario.id;
        const seguido_id = req.params.id;

        if (seguidor_id == seguido_id) {
            return res.redirect('/posts');
        }

        const existe = await Follow.findOne({
            where: {
                seguidor_id,
                seguido_id
            }
        });

        if (!existe) {

            await Follow.create({
                seguidor_id,
                seguido_id
            });

            await Notification.create({

                mensaje:
                    req.session.usuario.nombre +
                    ' comenzó a seguirte',

                usuario_id: seguido_id,

                leida: false

            });

        }

        res.redirect(`/usuarios/${seguido_id}`);

    } catch (error) {

        console.log(error);

        res.send('Error al seguir usuario');

    }

};

exports.unfollowUser = async (req, res) => {

    try {

        const seguidor_id = req.session.usuario.id;
        const seguido_id = req.params.id;

        const follow = await Follow.findOne({
            where: {
                seguidor_id,
                seguido_id
            }
        });

        if (follow) {
            await follow.destroy();
        }

        res.redirect(`/usuarios/${seguido_id}`);

    } catch (error) {

        console.log(error);

        res.send('Error al dejar de seguir usuario');

    }

};