import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
export class Apigame extends Component {
  render() {
    return (
      this.props.gamesApidata.map((data, idx) => {
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
                <Button onClick={e => this.props.addtoFavorite(data)} variant="primary">Add To Favorite</Button>
              </Card.Body>
            </Card>
          </div>
        )
      })
    )
  }
}

export default Apigame
