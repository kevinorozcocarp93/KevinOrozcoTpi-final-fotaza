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

            return res.render('auth/register', {
                error: 'El email ya está registrado'
            });

        }

        const passwordHash = await bcrypt.hash(password, 10);

        await User.create({
            nombre,
            email,
            password: passwordHash,
            activo: true,
            rol_id: 2
        });

        return res.redirect('/auth/login');

    } catch (error) {

        console.log(error);

        return res.render('auth/register', {
            error: 'Error al registrar usuario'
        });

    }

};

exports.login = async (req, res) => {

    try {

        const { email, password } = req.body;

        const usuario = await User.findOne({
            where: { email }
        });

        if (!usuario) {

            return res.render('auth/login', {
                error: 'Email o contraseña incorrectos'
            });

        }

        const passwordCorrecta = await bcrypt.compare(
            password,
            usuario.password
        );

        if (!passwordCorrecta) {

            return res.render('auth/login', {
                error: 'Email o contraseña incorrectos'
            });

        }

        req.session.usuario = {
            id: usuario.id,
            nombre: usuario.nombre,
            email: usuario.email,
            rol_id: usuario.rol_id
        };

        return res.redirect('/usuarios/perfil');

    } catch (error) {

        console.log(error);

        return res.render('auth/login', {
            error: 'Error al iniciar sesión'
        });

    }

};

exports.logout = (req, res) => {

    req.session.destroy((error) => {

        if (error) {
            return res.send('Error al cerrar sesión');
        }

        res.redirect('/auth/login');

    });

};