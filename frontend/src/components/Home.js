import React, { Component } from 'react'
import axios from 'axios'
import Apigame from './Apigame'
export class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gamesApidata: [],
      showGames: false,
      message: '',
      showadded: false
    }
  }

  componentDidMount = async () => {
    const request = await axios.get(`http://localhost:8080/games`)
    this.setState({
      gamesApidata: request.data,
      showGames: true
    })
  }
  addtoFavorite = async (objData) => {
    const request = await axios.post(`http://localhost:8080/games/list`, objData)
    this.setState({
      message: request.data,
      showadded: true
    })
  }
  render() {
    return (
      <>
        {
          this.state.showGames &&
          <Apigame gamesApidata={this.state.gamesApidata}
            addtoFavorite={this.addtoFavorite} />
        }
      </>
    )
  }
}

export default Home
