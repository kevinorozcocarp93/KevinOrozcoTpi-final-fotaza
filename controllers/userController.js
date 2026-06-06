const {
    User,
    Post,
    Comment,
    Like,
    Follow
} = require('../models');

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
exports.verUsuario = async (req, res) => {

    try {

        const usuario = await User.findByPk(
            req.params.id
        );

        if (!usuario) {
            return res.send('Usuario no encontrado');
        }

        const cantidadSeguidores =
            await Follow.count({
                where: {
                    seguido_id: usuario.id
                }
            });

        const cantidadSiguiendo =
            await Follow.count({
                where: {
                    seguidor_id: usuario.id
                }
            });

        const yaLoSigo =
            await Follow.findOne({
                where: {
                    seguidor_id: req.session.usuario.id,
                    seguido_id: usuario.id
                }
            });

        res.render(
        'usuarios/ver-usuario',
        {
            usuario,
            cantidadSeguidores,
            cantidadSiguiendo,
            yaLoSigo,
            usuarioLogueado: req.session.usuario
        }
    );

    } catch (error) {

        console.log(error);

        res.send('Error al cargar usuario');

    }

};