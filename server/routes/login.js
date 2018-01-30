const db = require('../services/db')

const connection = db.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '25prime25',
  database: 'lunchqs'
})

module.exports = async (req, res) => {
  const crdate = new Date()
  const users = {
    'first_name': req.body.first_name,
    'last_name': req.body.last_name,
    'user_name': req.body.user_name,
    'email': req.body.email,
    'password': req.body.password,
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
