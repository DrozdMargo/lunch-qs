const jwt = require('jsonwebtoken')

const ensureToken = (req, res, next) => {
  const bearerHeader = req.headers['authorization']
  if (typeof bearerHeader !== 'undefined') {
    const token = bearerHeader.split(' ')[1]
    jwt.verify(token, 'superSecret', function (err, decoded) {
      if (err) {
        return res.status(401).json({ success: false, message: 'Failed to authenticate token.' })
      } else {
        req.params.userId = decoded.userId
        next()
      }
    })
  } else {
    res.status(403).json({ msg: 'no token' })
  }
}
module.exports = ensureToken
