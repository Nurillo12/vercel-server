const express = require('express')
const router = express.Router()
const {getAllPosts} = require('../controllers/getAllPostsController')
const { protectRoute } = require('../modules/middleware');


router.get('/', protectRoute, getAllPosts)

module.exports = {
  path: '/allposts',
  router: router
}


