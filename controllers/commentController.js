const { Comment } = require('../models');

exports.create = async (req, res) => {

    try {

        await Comment.create({

            contenido: req.body.contenido,
            usuario_id: req.session.usuario.id,
            post_id: req.params.id

        });

        res.redirect('/posts/mis-posts');

    } catch (error) {

        console.log(error);

        res.send('Error al crear comentario');

    }

};