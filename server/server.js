const express = require('express')
const path = require('path')
const http = require('http')
const bodyParser = require('body-parser')

const api = require('./routes/api')
const login = require('./routes/login')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, '../dist')))

app.use('/api', api)
app.use('/login', login)

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'))
})

app.post('/api', (req, res) => {
  console.log(req, res)
})

const port = process.env.PORT || '3000'
app.set('port', port)

const server = http.createServer(app)

server.listen(port, () => console.log(`API running on localhost:${port}`))
