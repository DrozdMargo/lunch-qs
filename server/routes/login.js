const bcrypt = require('bcrypt')
const connection = require('../services/db')
const asyncMiddleware = require('../utils/asyncMiddleware')

module.exports = asyncMiddleware(async (req, res) => {
  const user = await connection.queryAsync('SELECT * FROM users WHERE user_name=?', req.body.user_name)
  if (user.length) {
    const comparePassword = bcrypt.compareSync(req.body.password, user[0].password)
    if (comparePassword) {
      res.send({
        'code': 200,
        'success': 'User login'
      })
    } else {
      res.send({error: 'wrong password'})
    }
  } else {
    console.log('wrong credentials')
  }
})
