const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')

const ensureToken = (req, res, next) => {
  const bearerHeader = req.headers['authorization']
  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ')
    const bearerToken = bearer[1]
    req.token = bearerToken
    next()
  } else {
    res.status(403).json({ msg: 'no token' })
  }
}

router.post('/login', require('./login'))
router.post('/signup', require('./signup'))
router.get('/users', ensureToken, require('./users'))

router.use((req, res, next) => {
  console.log(req)
  const token = req.body.token || req.body.token || req.headers['x-access-token']
  if (token) {
    jwt.verify(token, 'superSecret', function (err, decoded) {
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' })
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded
        console.log('decoded')
        next()
      }
    })
  } else {
    return res.status(403).send({
      success: false,
      message: 'No token provided.'
    })
  }
})

module.exports = router
