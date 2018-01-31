const connection = require('../services/db')
const bcrypt = require('bcrypt')

module.exports = async (req, res) => {
  const crdate = new Date()
  const hash = bcrypt.hashSync(req.body.password, 10)
  const users = {
    'first_name': req.body.first_name,
    'last_name': req.body.last_name,
    'user_name': req.body.user_name,
    'email': req.body.email,
    'password': hash,
    'created': crdate,
    'modified': crdate
  }
  const result = await connection.queryAsync('INSERT INTO users SET ?', users)
  res.send({
    'code': 200,
    'success': 'User registered sucessfully'
  })
  console.log(result)
}
