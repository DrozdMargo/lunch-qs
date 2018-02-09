const express = require('express')
const router = express.Router()
const loginRequired = require('./loginRequired')

router.post('/login', require('./login'))
router.post('/signup', require('./signup'))
router.get('/users', loginRequired, require('./users'))

module.exports = router
