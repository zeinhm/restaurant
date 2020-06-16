import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Navigation, Order, Header, Category, Menu } from 'components'
import { dataOrder, dataMenu } from 'data'

export default class Home extends Component {
  state = {
    menu: [],
    order: [],
    qty: 1,
    totalPrice: 0
  }

  componentDidMount() {
    this.getData()
  }

  getData = () => {
    this.setState({
      menu: dataMenu,
      order: dataOrder
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.order !== this.state.order) {
      this.getTotalPrice(this.state.qty, this.state.order)
    }
    if (prevState.qty !== this.state.qty) {
      this.getTotalPrice(this.state.qty, this.state.order)
    }
  }

  changeQty = action => {
    this.setState(prevState => ({
      qty: action === "increment" ? prevState.qty + 1 : (prevState.qty > 1 ? prevState.qty - 1 : prevState.qty)
    }))
  }

  getTotalPrice = (qty, order) => {
    const price = order.reduce((total, item) => total + item.price, 0).toFixed(2)
    this.setState({
      totalPrice: (qty * price).toFixed(2)
    })
  }

  getOrderData = data => {
    this.setState({
      order: data
    })
  }

  deleteItems = id => {
    const { order } = this.state
    let newOrder = [...order]
    const selectedData = order.map(e => e.id).indexOf(id)
    newOrder.splice(selectedData, 1)
    this.setState({
      order: newOrder
    })
  }

  addItems = item => {
    const { order } = this.state
    let newOrder = [...order, item]
    this.setState({
      order: newOrder
    })
  }

  render() {
    const { menu, order, totalPrice, qty } = this.state
    return (
      <div className="home-layout">
        <Row>
          <Col large={true} xs={8}>
            <Navigation />
            <Header />
            <Category />
            <Menu
              menu={menu}
              addItems={this.addItems}
            />
          </Col>
          <Col large={true} xs={{ span: 4, offset: 1 }}>
            <Order
              order={order}
              totalPrice={totalPrice}
              qty={qty}
              deleteItems={this.deleteItems}
              changeQty={this.changeQty}
            />
          </Col>
        </Row>
      </div>
    )
  }
}

