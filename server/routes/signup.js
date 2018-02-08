const connection = require('../services/db')
const asyncMiddleware = require('../utils/asyncMiddleware')
const { hash } = require('../services/password')

module.exports = asyncMiddleware(async (req, res) => {
  const crdate = new Date()
  const passwordHash = await hash(req.body.password, 10)
  const users = {
    'first_name': req.body.first_name,
    'last_name': req.body.last_name,
    'user_name': req.body.user_name,
    'email': req.body.email,
    'password': passwordHash,
    'created': crdate,
    'modified': crdate
  }
  const result = await connection.queryAsync('INSERT INTO users SET ?', users)
  console.log(res)
  res.send({
    'code': 200,
    'success': 'User registered sucessfully'
  })
  console.log(result)
})
