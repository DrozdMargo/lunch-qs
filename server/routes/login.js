const connection = require('../services/db')
const asyncMiddleware = require('../utils/asyncMiddleware')
const { compare } = require('../services/password')

module.exports = asyncMiddleware(async (req, res) => {
  const user = await connection.queryAsync('SELECT * FROM users WHERE user_name=?', req.body.user_name)
  if (user.length) {
    const comparePassword = await compare(req.body.password, user[0].password)
    if (comparePassword) {
      res.status(200).send({
        success: 'user logged in'
      })
    } else {
      res.status(401).json({message: 'Authentication failed. Wrong password.'})
    }
  } else {
    res.status(401).json({ message: 'Authentication failed. User not found.' })
  }
})
