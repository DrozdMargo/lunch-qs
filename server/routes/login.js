const bcrypt = require('bcrypt')
const connection = require('../services/db')

module.exports = async (req, res) => {
  const hash = bcrypt.hashSync(req.body.password, 10)
  const users = {
    'user_name': req.body.user_name,
    'password': hash
  }
  const result = await connection.queryAsync('SELECT * from users', users)
  res.send({
    'code': 200,
    'success': 'User registered sucessfully'
  })
  console.log(result)
}
