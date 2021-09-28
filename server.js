const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors')
const { karlsbikes } = require('./data.js')

app.use(cors());

app.get('/karlsbikes', (req, res) => {
  res.json(karlsbikes);
})

app.get('/karlsbikes/:id', (req, res) => {
    const matchingbike = karlsbikes.find(bike => bike.id === Number(req.params.id));
  res.json(matchingbike);
})

module.exports = { app }