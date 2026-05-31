const { Post } = require('../models');
const { Op } = require('sequelize');

exports.search = async (req, res) => {

    const termino = req.query.q || '';

    const posts = await Post.findAll({

        where: {

            titulo: {
                [Op.iLike]: `%${termino}%`
            }

        }

    });

    res.render('publicaciones/search', {
        posts,
        termino
    });

};