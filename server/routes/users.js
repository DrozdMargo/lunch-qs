const connection = require('../services/db')
const asyncMiddleware = require('../utils/asyncMiddleware')

module.exports = asyncMiddleware(async (req, res) => {
  console.log(req)
  if (req.body.token) {
    const users = await connection.queryAsync('SELECT * FROM users')
    console.log(res)
    res.json({users})
    console.log(users)
  } else {
    res.status(401).json({
      msg: 'no token'
    })
  }
})
