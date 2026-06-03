const { User, Post, Comment, Like } = require('../models');

exports.perfil = async (req, res) => {

    try {

        const usuarioId = req.session.usuario.id;

        const cantidadPosts = await Post.count({
            where: {
                usuario_id: usuarioId
            }
        });

        const cantidadComentarios = await Comment.count({
            where: {
                usuario_id: usuarioId
            }
        });

        const cantidadLikes = await Like.count({
            where: {
                usuario_id: usuarioId
            }
        });

        res.render('usuarios/perfil', {

            usuario: req.session.usuario,

            cantidadPosts,
            cantidadComentarios,
            cantidadLikes

        });

    } catch (error) {

        console.log(error);

        res.send('Error al cargar perfil');

    }

};