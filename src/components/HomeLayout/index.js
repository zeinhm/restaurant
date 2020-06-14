import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Navigation, Order, Header, Category, Menu } from 'components'

export default class HomeLayout extends Component {
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
          <Col large={true} xs={{ span: 3, offset: 1 }}>
            <Order />
          </Col>
        </Row>
      </div>
    )
  }
}
