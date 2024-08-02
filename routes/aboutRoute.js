const express = require('express');
const router = express.Router();
const { getAboutPage } = require('../controllers/aboutController');
const { protectRoute } = require('../modules/middleware');

router.get('/', protectRoute, getAboutPage);

module.exports = {
    path: '/about',
    router: router,
};
