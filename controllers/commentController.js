const { Comment } = require('../models');

exports.create = async (req, res) => {

    try {

        await Comment.create({

            contenido: req.body.contenido,
            usuario_id: req.session.usuario.id,
            post_id: req.params.id

        });

        if (req.body.origen === 'mis-posts') {

            return res.redirect('/posts/mis-posts');

        }

        res.redirect('/posts');

    } catch (error) {

        console.log(error);

        res.send('Error al crear comentario');

    }

};