const express = require('express')
const router = express.Router()
const {getAddPost, postAddMethod} = require('../controllers/addPostController')

router.get('/', getAddPost)
router.post('/', postAddMethod)

module.exports = {
  path: '/addpost',
  router: router
}