const express = require('express')
const bodyParser = require('body-parser')
const moviesRouter = require('./src/movies/routes')

const app = express()
const port = process.env.PORT || 4000



app
.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  res.header("Access-Control-Allow-Credentials", "true")
  next()})
.use(bodyParser.json())
.use(moviesRouter)
.listen(port, () => console.log(`Listening on port ${port}`))

