const express = require('express')
const router = express.Router()
const {getSignInPage, postSignInPage} = require('../controllers/signInControllers')

router.get('/', getSignInPage)
router.post('/', postSignInPage)

module.exports = {
  path: '/signin',
  router: router
}