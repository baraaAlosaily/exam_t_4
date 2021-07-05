'use strict'

const mongoose = require('mongoose')
const cors = require('cors')
const axios = require('axios')
const express = require('express')

require('dotenv').config()
const app = express()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 8081
mongoose.connect('mongodb://root:0000@cluster0-shard-00-00.erxur.mongodb.net:27017,cluster0-shard-00-01.erxur.mongodb.net:27017,cluster0-shard-00-02.erxur.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-f5xqxd-shard-0&authSource=admin&retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const Gamescontroller = require('./Controllers/Games.controllers')
const Crud = require('./Controllers/Schema.contrller')

app.get('/', (req, res) => {
  res.send('My working well')
})

app.get('/games', Gamescontroller)

app.post('/games/list', Crud.creatGamePeice)
app.get('/games/list', Crud.getGamePeice)
app.delete('/games/list/:slug', Crud.deleteGamePeice)
app.put('/games/list/:slug', Crud.putGamePeice)


app.listen(PORT, () => {
  console.log(`Server work on ${PORT}`);
})