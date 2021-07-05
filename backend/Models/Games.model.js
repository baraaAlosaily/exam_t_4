'use strict'

class GamesModel {
  constructor(games) {
    this.name = games.name;
    this.gender = games.gender;
    this.img = games.img;
    this.psiPowers = games.psiPowers[0].description
  }
}

module.exports = GamesModel