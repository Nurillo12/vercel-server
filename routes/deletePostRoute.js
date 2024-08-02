const express = require('express')
const router = express.Router()
const {deletePostMethod} = require('../controllers/deletePostController')

router.post('/:id', deletePostMethod)

module.exports = {
  path: '/delete',
  router: router
}