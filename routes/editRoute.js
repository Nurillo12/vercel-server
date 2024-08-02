const express = require('express')
const router = express.Router()
const {getEditPage, postEditPage} = require('../controllers/editController')

router.get('/:id', getEditPage)
router.post('/:id', postEditPage)


module.exports = {
  path: '/edit',
  router: router
}