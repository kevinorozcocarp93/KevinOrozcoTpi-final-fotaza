require('dotenv').config();

const sequelize = require('./config/database');

const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('home');
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