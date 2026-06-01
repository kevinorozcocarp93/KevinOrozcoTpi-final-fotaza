const express = require('express');
const router = express.Router();

const authMiddleware = require('../middlewares/authMiddleware');
const postController = require('../controllers/postController');
const upload = require('../middlewares/uploadMiddleware');

router.get('/create', authMiddleware, postController.showCreate);

router.post(
    '/create',
    authMiddleware,
    upload.single('imagen'),
    postController.create
);

router.get('/mis-posts',
    authMiddleware,
    postController.misPosts
);

router.get(
    '/edit/:id',
    authMiddleware,
    postController.showEdit
);

router.post(
    '/edit/:id',
    authMiddleware,
    postController.update
);

router.post(
    '/delete/:id',
    authMiddleware,
    postController.delete
);

module.exports = router;