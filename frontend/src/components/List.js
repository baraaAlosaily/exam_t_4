import React, { Component } from 'react'
import axios from 'axios'
import ListData from './ListData'
import ListForm from './ListForm'
export class list extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listApidata: [],
      showlistGames: false,
      message: '',
      showadded: false,
      slug: '',
      psiPowers: '',
      showFrom: false
    }
  }
  showUpdateForm = async (slug, psiPowers) => {
    this.setState({
      slug: slug,
      psiPowers: psiPowers,
      showFrom: true
    })
  }
  componentDidMount = async () => {
    const request = await axios.get(`http://localhost:8080/games/list`)
    this.setState({
      listApidata: request.data,
      showlistGames: true
    })
  }
  deleteItem = async (slug) => {
    await axios.delete(`http://localhost:8080/games/list/${slug}`)
    const newArrayofGames = this.state.listApidata.filter(obj => obj.slug !== slug)
    this.setState({
      listApidata: newArrayofGames
    })
  }
  changePsiPower = (e) => this.setState({ psiPowers: e.target.value })
  updateData = async (e) => {
    e.preventDefault();
    const request = await axios.put(`http://localhost:8080/games/list/${this.state.slug}`, { psiPowers: this.state.psiPowers })
    this.setState({
      listApidata: request.data
    })
  }
  render() {
    return (
      <>
        {
          this.state.showFrom &&
          <ListForm
            changePsiPower={this.changePsiPower}
            updateData={this.updateData}
            psiPowers={this.state.psiPowers} />
        }
        {this.state.showlistGames &&
          <ListData
            listApidata={this.state.listApidata}
            deleteItem={this.deleteItem}
            showUpdateForm={this.showUpdateForm} />}
      </>
    )
  }
}

export default list
