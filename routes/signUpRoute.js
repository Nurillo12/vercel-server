const express = require('express')
const router = express.Router()
const {getSignUpPage, postSignUpPage} = require('../controllers/signUpControllers')

router.get('/', getSignUpPage)
router.post('/', postSignUpPage)

module.exports = {
  path: '/signup',
  router: router
}