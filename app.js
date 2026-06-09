require('dotenv').config();

const sequelize = require('./config/database');

const session = require('express-session');

const express = require('express');
const path = require('path');

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const searchRoutes = require('./routes/searchRoutes');
const commentRoutes = require('./routes/commentRoutes');
const likeRoutes = require('./routes/likeRoutes');
const followRoutes = require('./routes/followRoutes');
const notificationRoutes = require('./routes/notificationRoutes');
const notificationMiddleware = require('./middlewares/notificationMiddleware');
const ratingRoutes = require('./routes/ratingRoutes');

//const authMiddleware = require('./middlewares/authMiddleware');

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
app.use(notificationMiddleware);
app.use('/uploads', express.static('public/uploads'));

app.use('/auth', authRoutes);
app.use('/usuarios', userRoutes);
app.use('/posts', postRoutes);
app.use('/search', searchRoutes);
app.use('/comments', commentRoutes);
app.use('/likes', likeRoutes);
app.use('/follow', followRoutes);
app.use('/notificaciones', notificationRoutes);
app.use('/ratings', ratingRoutes);

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