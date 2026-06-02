const { Like } = require('../models');

exports.like = async (req, res) => {

    try {

        const existeLike = await Like.findOne({
            where: {
                usuario_id: req.session.usuario.id,
                post_id: req.params.id
            }
        });

        if (!existeLike) {

            await Like.create({
                usuario_id: req.session.usuario.id,
                post_id: req.params.id
            });

        }

        res.redirect('/posts/mis-posts');

    } catch (error) {

        console.log(error);

        res.send('Error al dar like');

    }

};