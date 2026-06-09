const { Rating } = require('../models');

exports.valorar = async (req, res) => {

    try {

        const usuario_id = req.session.usuario.id;

        const post_id = req.params.id;

        const valor = req.body.valor;

        const ratingExistente = await Rating.findOne({

            where: {
                usuario_id,
                post_id
            }

        });

        if (ratingExistente) {

            await ratingExistente.update({
                valor
            });

        } else {

            await Rating.create({

                valor,
                usuario_id,
                post_id

            });

        }

        res.redirect('/posts');

    } catch (error) {

        console.log(error);

        res.send('Error al valorar publicación');

    }

};