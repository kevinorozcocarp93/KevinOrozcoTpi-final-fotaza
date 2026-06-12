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

        const usuario = await User.findByPk(
            usuarioId
        );

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

        if (usuario.rol_id === 1) {
            nombreRol = 'Administrador';
        }

        res.render('usuarios/perfil', {

            usuario,

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

        const publicaciones =
            await Post.findAll({

                where: {
                    usuario_id: usuario.id
                },

                include: [
                    Comment,
                    Like
                ],

                order: [
                    ['createdAt', 'DESC']
                ]

            });

        res.render(
            'usuarios/ver-usuario',
            {
                usuario,
                cantidadSeguidores,
                cantidadSiguiendo,
                yaLoSigo,
                publicaciones,
                usuarioLogueado: req.session.usuario
            }
        );

    } catch (error) {

        console.log(error);

        res.send('Error al cargar usuario');

    }

};

exports.showEditarPerfil = async (req, res) => {

    try {

        const usuario = await User.findByPk(
            req.session.usuario.id
        );

        res.render(
            'usuarios/editar-perfil',
            {
                usuario
            }
        );

    } catch (error) {

        console.log(error);

        res.send('Error al cargar edición de perfil');

    }

};

exports.actualizarPerfil = async (req, res) => {

    try {

        const usuario = await User.findByPk(
            req.session.usuario.id
        );

        if (!usuario) {
            return res.send('Usuario no encontrado');
        }

        const datosActualizar = {

            nombre: req.body.nombre,
            bio: req.body.bio

        };

        if (req.file) {

            datosActualizar.foto_perfil =
                req.file.path;

        }

        await usuario.update(
            datosActualizar
        );

        req.session.usuario.nombre =
            req.body.nombre;

        res.redirect('/usuarios/perfil');

    } catch (error) {

        console.log(error);

        res.send('Error al actualizar perfil');

    }

};