const express = require('express');
const router = express.Router();

const authMiddleware = require('../middlewares/authMiddleware');
const upload = require('../middlewares/uploadMiddleware');

const userController = require('../controllers/userController');

router.get(
    '/perfil',
    authMiddleware,
    userController.perfil
);

router.get(
    '/editar',
    authMiddleware,
    userController.showEditarPerfil
);

router.post(
    '/editar',
    authMiddleware,
    upload.single('foto_perfil'),
    userController.actualizarPerfil
);

router.get(
    '/:id',
    authMiddleware,
    userController.verUsuario
);

module.exports = router;