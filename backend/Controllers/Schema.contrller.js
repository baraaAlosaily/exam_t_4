'use strict'

const gamePeice = require('../Models/Schema.model')


const creatGamePeice = async (req, res) => {
  const { name, gender, img, psiPowers } = req.body;
  const slug = name.toLowerCase().split(' ').join('-')
  gamePeice.find({ name: name }, (error, data) => {
    if (data.length > 0) {
      res.send('this item is exist')
    } else {
      const newGamePiece = new gamePeice({
        name: name, gender: gender, img: img, psiPowers: psiPowers, slug: slug
      })
      newGamePiece.save();
      res.send(newGamePiece)
    }
  })
}
const getGamePeice = async (req, res) => {
  gamePeice.find({}, (error, data) => {
    res.send(data)
  })
}
const deleteGamePeice = async (req, res) => {
  const slug = req.params.slug;
  gamePeice.remove({ slug: slug }, (error, data) => {
    if (error) {
      res.send(error)
    } else { res.send(data) }
  })
}
const putGamePeice = async (req, res) => {
  const { psiPowers } = req.body;
  const slug = req.params.slug;
  gamePeice.find({ slug: slug }, (error, data) => {
    if (error) {
      res.send(error)
    } else {
      data[0].psiPowers = psiPowers
      data[0].save()
      res.send(data)
    }
  })
}


module.exports = {
  creatGamePeice,
  getGamePeice,
  deleteGamePeice,
  putGamePeice
}