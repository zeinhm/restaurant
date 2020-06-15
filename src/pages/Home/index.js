import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Navigation, OrderComponent, Header, Category, Menu } from 'components'

export default class Home extends Component {
  render() {
    return (
      <div className="home-layout">
        <Row>
          <Col large={true} xs={8}>
            <Navigation />
            <Header />
            <Category />
            <Menu />
          </Col>
          <Col large={true} xs={{ span: 4, offset: 1 }}>
            <OrderComponent />
          </Col>
        </Row>
      </div>
    )
  }
}

