const jwt = require('jsonwebtoken')
const { promisify } = require('util')

const verifyAsync = promisify(jwt.verify)

const ensureToken = async(req, res, next) => {
  const bearerHeader = req.headers['authorization']
  if (typeof bearerHeader !== 'undefined') {
    const token = bearerHeader.split(' ')[1]
    try {
      const decoded = await verifyAsync(token, 'superSecret')
      req.params.userId = decoded.userId
      next()
    } catch (e) {
      res.status(401).json({ success: false, message: 'Failed to authenticate token.' });
    }
  } else {
    res.status(403).json({ msg: 'no token' })
  }
}
module.exports = ensureToken
