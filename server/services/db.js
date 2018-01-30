const mysql = require('mysql')
const Connection = require('mysql/lib/Connection')
const { promisify } = require('util')

const prototype = Connection.prototype
prototype.queryAsync = promisify(prototype.query)

module.exports = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '25prime25',
  database: 'lunchqs'
})
