import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Navigation, Order, Header, Category, Menu } from 'components'

export default class Home extends Component {
  render() {
    const { menu, order, totalPrice, qty } = this.props
    return (
      <div className="home-layout">
        <Row>
          <Col large={true} xs={8}>
            <Navigation />
            <Header />
            <Category />
            <Menu
              menu={menu}
              addItems={this.props.addItems}
            />
          </Col>
          <Col large={true} xs={{ span: 4, offset: 1 }}>
            <Order
              order={order}
              totalPrice={totalPrice}
              qty={qty}
              deleteItems={this.props.deleteItems}
              changeQty={this.props.changeQty}
            />
          </Col>
        </Row>
      </div>
    )
  }
}

