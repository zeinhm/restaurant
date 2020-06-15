import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Navigation, OrderComponent, Header, Warning } from 'components'

export default class Order extends Component {
  render() {
    return (
      <div className="home-layout">
        <Row>
          <Col large={true} xs={8}>
            <Navigation />
            <Header />
            <Warning />
            <div className="container">
              <OrderComponent />
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

