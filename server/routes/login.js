const connection = require('../services/db')
const asyncMiddleware = require('../middleware/asyncMiddleware')
const { compare } = require('../services/password')
const jwt = require('jsonwebtoken')

module.exports = asyncMiddleware(async (req, res) => {
  const user = await connection.queryAsync('SELECT * FROM users WHERE user_name=?', req.body.user_name)
  console.log(user)
  if (user.length) {
    const comparePassword = await compare(req.body.password, user[0].password)
    if (comparePassword) {
      const payload = {
        userId: user.id
      }
      const token = jwt.sign(payload, 'superSecret', {expiresIn: '2h'})
      res.status(200).json({
        success: true,
        message: 'user logged in',
        token
      })
    } else {
      res.status(401).json({ message: 'Wrong password' })
    }
  } else {
    res.status(401).json({ message: 'User not found' })
  }
})
