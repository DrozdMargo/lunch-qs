const mysql = require('mysql')
const Connection = require('mysql/lib/Connection')
const { promisify } = require('util')

const prototype = Connection.prototype
prototype.queryAsync = promisify(prototype.query)

module.exports = mysql
