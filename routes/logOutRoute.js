const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res 
     .clearCookie('token')
     .redirect('/')
})

module.exports = {
  path: '/logout',
  router: router
} 