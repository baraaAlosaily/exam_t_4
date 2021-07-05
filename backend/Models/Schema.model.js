'use strict'

const mongoose = require('mongoose')

const GameSchema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true
  },
  slug: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true
  },
  gender: String,
  img: String,
  psiPowers: String
})

const GameModel = mongoose.model('GameSchema', GameSchema)

module.exports = GameModel