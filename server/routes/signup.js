const connection = require('../services/db')
const bcrypt = require('bcrypt')
const asyncMiddleware = require('../utils/asyncMiddleware')

module.exports = asyncMiddleware(async (req, res) => {
  const crdate = new Date()
  const users = {
    'first_name': req.body.first_name,
    'last_name': req.body.last_name,
    'user_name': req.body.user_name,
    'email': req.body.email,
    'password': bcrypt.hashSync(req.body.password, 10),
    'created': crdate,
    'modified': crdate
  }
  const result = await connection.queryAsync('INSERT INTO users SET ?', users)
  res.send({
    'code': 200,
    'success': 'User registered sucessfully'
  })
  console.log(result)
})
