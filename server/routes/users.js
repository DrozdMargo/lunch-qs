const connection = require('../services/db')
const asyncMiddleware = require('../middleware/asyncMiddleware')

module.exports = asyncMiddleware(async (req, res) => {
  const users = await connection.queryAsync('SELECT * FROM users')
  res.json({users})
})
