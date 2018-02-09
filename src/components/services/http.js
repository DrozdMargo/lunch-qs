const axios = require('axios')

const http = axios.create({
  baseURL: 'http://localhost:3000'
})
const token = localStorage.getItem('token')
if (token) {
  http.defaults.headers.common['Authorization'] = `Bearer ${token}`
}
module.exports = http
