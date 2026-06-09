const { Post, User } = require('../models');
const { Op } = require('sequelize');

exports.search = async (req, res) => {

    try {

        const termino = req.query.q || '';

        const posts = await Post.findAll({

            where: {

                titulo: {
                    [Op.iLike]: `%${termino}%`
                }

            }

        });

        const usuarios = await User.findAll({

            where: {

                nombre: {
                    [Op.iLike]: `%${termino}%`
                }

            }

        });

        res.render(
            'publicaciones/search',
            {
                posts,
                usuarios,
                termino
            }
        );

    } catch (error) {

        console.log(error);

        res.send('Error en la búsqueda');

    }

};