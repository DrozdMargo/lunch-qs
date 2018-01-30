const db = require('./db')
const express = require('express')
const router = express.Router()

const connection = db.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '25prime25',
  database: 'lunchqs'
})

router.post('/login', async (req, res) => {
  const crdate = new Date()
  const users = {
    'user_name': req.body.user_name,
    'email': req.body.email,
    'password': req.body.password,
    'last_visit': crdate
  }
  const sql = ('INSERT INTO users SET ?', users)
  const result = await connection.queryAsync(sql)
  res.send({
    'code': 200,
    'success': 'User login sucessfully'
  })
  console.log(result)
})

module.exports = router
