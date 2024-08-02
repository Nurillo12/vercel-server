const express = require('express');
const router = express.Router();
const { getProfilePage } = require('../controllers/userController');
const { protectRoute } = require('../modules/middleware');

router.get('/', protectRoute, getProfilePage);

module.exports = {
    path: '/profile',
    router: router,
};
