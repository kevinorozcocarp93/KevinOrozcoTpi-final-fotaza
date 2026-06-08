const {
    Comment,
    Post,
    User,
    Notification
} = require('../models');

exports.create = async (req, res) => {

    try {

        await Comment.create({

            contenido: req.body.contenido,
            usuario_id: req.session.usuario.id,
            post_id: req.params.id

        });

        const post = await Post.findByPk(
            req.params.id
        );

        const usuarioComentario =
            await User.findByPk(
                req.session.usuario.id
            );

        if (
            post &&
            post.usuario_id !==
                req.session.usuario.id
        ) {

            await Notification.create({

                mensaje:
                    `${usuarioComentario.nombre} comentó tu publicación`,

                leida: false,

                usuario_id:
                    post.usuario_id

            });

        }

        if (req.body.origen === 'mis-posts') {

            return res.redirect(
                '/posts/mis-posts'
            );

        }

        res.redirect('/posts');

    } catch (error) {

        console.log(error);

        res.send(
            'Error al crear comentario'
        );

    }

};