const bcrypt = require('bcrypt')
const connection = require('../services/db')
const jwt = require('jsonwebtoken')
const asyncMiddleware = require('../utils/asyncMiddleware')

module.exports = asyncMiddleware(async (req, res) => {
  const hash = bcrypt.hashSync(req.body.password, 10)
  const result = await connection.queryAsync('SELECT * FROM users WHERE user_name=? AND password=?', [req.body.user_name, hash])
  if (result.length) {
    console.log(result[0].id)
  } else {
    console.log('wrong credentials')
  }
  console.log(result)
  res.send({
    'code': 200,
    'success': 'User login'
  })
})
