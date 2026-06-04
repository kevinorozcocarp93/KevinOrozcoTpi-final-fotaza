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

        let nombreRol = 'Usuario';

if (req.session.usuario.rol_id === 1) {
    nombreRol = 'Administrador';
}

    res.render('usuarios/perfil', {

        usuario: req.session.usuario,

        nombreRol,

        cantidadPosts,
        cantidadComentarios,
        cantidadLikes

    });

    } catch (error) {

        console.log(error);

        res.send('Error al cargar perfil');

    }

};