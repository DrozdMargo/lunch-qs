const connection = require('../services/db')
const asyncMiddleware = require('../utils/asyncMiddleware')

module.exports = asyncMiddleware(async (req, res) => {
  console.log(req)
  const userId = req.params
  console.log(userId)
  const users = await connection.queryAsync('SELECT * FROM users')
  console.log(res)
  res.json({users})
  console.log(users)
})
