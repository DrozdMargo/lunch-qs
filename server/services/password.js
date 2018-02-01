const { hashSync, compare } = require('bcrypt')
const { promisify } = require('util')

module.exports = {
  hash: promisify(hashSync),
  compare: promisify(compare)
}
