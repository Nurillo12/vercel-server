const express = require('express');
const router = express.Router();
const { getContactPage } = require('../controllers/contactController');
const { protectRoute } = require('../modules/middleware');
router.get('/', protectRoute, getContactPage);

module.exports = {
    path: '/contact',
    router: router,
};
