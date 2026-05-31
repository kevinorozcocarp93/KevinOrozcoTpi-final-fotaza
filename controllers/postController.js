const { Post } = require('../models');

exports.showCreate = (req, res) => {

    res.render('publicaciones/create');

};

exports.create = async (req, res) => {

    try {

        const { titulo, descripcion } = req.body;

        await Post.create({

            titulo,
            descripcion,
            fecha_publicacion: new Date(),
            usuario_id: req.session.usuario.id

        });

        res.redirect('/posts/mis-posts');

    } catch (error) {

        console.log(error);

        res.send('Error al crear publicación');

    }

};
exports.misPosts = async (req, res) => {

    const posts = await Post.findAll({

        where: {
            usuario_id: req.session.usuario.id
        }

    });

    res.render('publicaciones/mis-posts', {
        posts
    });

};