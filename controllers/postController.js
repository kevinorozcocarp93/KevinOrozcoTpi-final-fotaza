const { Post, Comment, User, Like } = require('../models');

exports.showCreate = (req, res) => {

    res.render('publicaciones/create');

};

exports.create = async (req, res) => {

    try {

        const { titulo, descripcion } = req.body;
        let nombreImagen = null;

        if (req.file) {
        nombreImagen = req.file.filename;
        }

        await Post.create({

        titulo,
        descripcion,
        imagen: nombreImagen,
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
        },

        include: [
            {
                model: Comment,
                include: [
                    {
                        model: User
                    }
                ]
            },
            {
                model: Like
            }
        ]

    });

    res.render('publicaciones/mis-posts', {
        posts
    });

};
exports.showEdit = async (req, res) => {

    const post = await Post.findByPk(
        req.params.id
    );

    if (!post) {
        return res.send('Publicación no encontrada');
    }

    res.render(
        'publicaciones/edit',
        { post }
    );

};
exports.update = async (req, res) => {

    try {

        const post = await Post.findByPk(
            req.params.id
        );

        if (!post) {
            return res.send('Publicación no encontrada');
        }

        await post.update({

            titulo: req.body.titulo,
            descripcion: req.body.descripcion

        });

        res.redirect('/posts/mis-posts');

    } catch (error) {

        console.log(error);

        res.send('Error al actualizar');

    }

};

exports.delete = async (req, res) => {

    try {

        const post = await Post.findByPk(
            req.params.id
        );

        if (!post) {
            return res.send('Publicación no encontrada');
        }

        await post.destroy();

        res.redirect('/posts/mis-posts');

    } catch (error) {

        console.log(error);

        res.send('Error al eliminar publicación');

    }

};

exports.feed = async (req, res) => {

    const posts = await Post.findAll({

        include: [
            {
                model: User
            },
            {
                model: Comment,
                include: [
                    {
                        model: User
                    }
                ]
            },
            {
                model: Like
            }
        ],

        order: [
            ['fecha_publicacion', 'DESC']
        ]

    });

    res.render('publicaciones/feed', {
        posts
    });

};