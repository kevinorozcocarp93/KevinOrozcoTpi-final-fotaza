require('dotenv').config();

const sequelize = require('./config/database');

const session = require('express-session');

const express = require('express');
const path = require('path');

const authRoutes = require('./routes/authRoutes');

const authMiddleware = require('./middlewares/authMiddleware');

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
    secret: process.env.SESSION_SECRET || 'mi_secreto',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        maxAge: 1000 * 60 * 60 * 24
    }
}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/auth', authRoutes);

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/perfil', authMiddleware, (req, res) => {

    res.send(`Bienvenido ${req.session.usuario.nombre}`);

});

sequelize.authenticate()
    .then(() => {
        console.log('Conexión a PostgreSQL exitosa');
    })
    .catch((error) => {
        console.log('Error de conexión:', error);
    });

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});