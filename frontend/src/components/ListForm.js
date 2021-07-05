import React, { Component } from 'react'

export class ListForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.updateData}>
        <input onChange={this.props.changePsiPower} type="text" value={this.props.psiPowers} />
        <input type="submit" value="Update Value" />
      </form>
    )
  }
}

export default ListForm
