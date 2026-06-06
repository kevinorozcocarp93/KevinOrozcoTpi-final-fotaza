const { Follow } = require('../models');

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

        }

        res.redirect('/posts');

    } catch (error) {

        console.log(error);

        res.send('Error al seguir usuario');

    }

};