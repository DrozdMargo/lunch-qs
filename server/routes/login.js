const db = require('./db')
const express = require('express')
const router = express.Router()

const connection = db.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '25prime25',
  database: 'lunchqs'
})

router.get('/createdb', async (req, res) => {
  const sql = 'CREATE TABLE  users( id int(11) NOT NULL AUTO_INCREMENT,  first_name varchar(100) COLLATE utf8_unicode_ci NOT NULL, last_name varchar(100) COLLATE utf8_unicode_ci NOT NULL, user_name varchar(100) COLLATE utf8_unicode_ci NOT NULL, password varchar(255) COLLATE utf8_unicode_ci NOT NULL, created datetime NOT NULL, modified datetime NOT NULL, PRIMARY KEY(id))'
  const result = await connection.queryAsync(sql)
  console.log(result)
  res.send('Database created ...')
})

module.exports = router
