'use strict'

const { default: axios } = require('axios')
const { response } = require('express')
const gamesModel = require('../Models/Games.model')

const Gamescontroller = async (req, res) => {
  const url = `https://psychonauts-api.herokuapp.com/api/characters?limit=10`
  axios.get(`https://psychonauts-api.herokuapp.com/api/characters?limit=10`).then(response => {
    const myNewGame = response.data.map(obj => {
      return new gamesModel(obj)
    })
    res.send(myNewGame)
  }).catch(error => {
    console.log(`==============`);
    console.log(`Catch Error`);
    console.log(`==============`);
    console.log(error);
  })
}

module.exports = Gamescontroller