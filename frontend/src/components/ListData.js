import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
export class ListData extends Component {
  render() {
    return (
      this.props.listApidata.map((data, idx) => {
        return (
          <div key={idx}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={data.img} />
              <Card.Body>
                <Card.Title>{data.name}</Card.Title>
                <Card.Text>
                  {data.gender}
                </Card.Text>
                <Card.Text>
                  {data.psiPowers}
                </Card.Text>
                <Button onClick={e => this.props.deleteItem(data.slug)} variant="primary">Delete</Button>
                <Button onClick={e => this.props.showUpdateForm(data.slug, data.psiPowers)} variant="primary">Update Value</Button>
              </Card.Body>
            </Card>
          </div>
        )
      })
    )
  }
}

export default ListData
