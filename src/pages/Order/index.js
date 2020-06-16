import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Navigation, Order, Header, Warning } from 'components'

export default class OrderPage extends Component {
  render() {
    return (
      <div className="home-layout">
        <Row>
          <Col large={true} xs={8}>
            <Navigation />
            <Header />
            <Warning />
            <div className="container">
              <Order {...this.props} id="menu" />
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

