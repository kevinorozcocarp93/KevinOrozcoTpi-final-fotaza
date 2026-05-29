const bcrypt = require('bcrypt');

const { User } = require('../models');

exports.showRegister = (req, res) => {
    res.render('auth/register');
};

exports.showLogin = (req, res) => {
    res.render('auth/login');
};

exports.register = async (req, res) => {

    try {

        const { nombre, email, password } = req.body;

        const existeUsuario = await User.findOne({
            where: { email }
        });

        if (existeUsuario) {
            return res.send('El email ya está registrado');
        }

        const passwordHash = await bcrypt.hash(password, 10);

        await User.create({
            nombre,
            email,
            password: passwordHash,
            activo: true,
            rol_id: 2
        });

        res.send('Usuario registrado correctamente');

    } catch (error) {

        console.log(error);

        res.send('Error al registrar usuario');

    }

};