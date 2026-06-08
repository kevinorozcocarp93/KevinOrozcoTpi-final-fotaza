const {
    Like,
    Post,
    User,
    Notification
} = require('../models');

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

            const post = await Post.findByPk(
                req.params.id
            );

            const usuarioLike =
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
                        `${usuarioLike.nombre} indicó que le gusta tu publicación`,

                    leida: false,

                    usuario_id:
                        post.usuario_id

                });

            }

        }

        res.redirect('/posts');

    } catch (error) {

        console.log(error);

        res.send('Error al dar like');

    }

};