const { hash, compare } = require('bcrypt')
const { promisify } = require('util')

module.exports = {
  hash: promisify(hash),
  compare: promisify(compare)
}
