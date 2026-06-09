const express = require('express');

const router = express.Router();

const authMiddleware =
    require('../middlewares/authMiddleware');

const ratingController =
    require('../controllers/ratingController');

router.post(
    '/:id',
    authMiddleware,
    ratingController.valorar
);

module.exports = router;