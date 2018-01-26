const express = require('express')
const path = require('path')
const http = require('http')
const bodyParser = require('body-parser')
const cors = require('cors')
const api = require('./routes/api')
const login = require('./routes/login')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, '../dist')))
app.use(cors())
app.use('/api', api)
app.use(login)

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'))
})

const corsOption = {
  origin: 'http://localhost:8080',
  optionsSuccessStatus: 200
}

app.post('/api', cors(corsOption), (req, res) => {
  console.log(req, res)
})
app.get('/api', cors(corsOption), (req, res) => {
  console.log(req.body)
})
const port = process.env.PORT || '3000'
app.set('port', port)

const server = http.createServer(app)

server.listen(port, () => console.log(`API running on localhost:${port}`))
