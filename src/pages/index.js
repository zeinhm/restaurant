import React, { Component } from 'react'
import Home from './Home'
import Order from './Order'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { dataOrder, dataMenu } from 'data'

export default class Pages extends Component {

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
    this.setState(prevState => ({
      order: [...prevState.order, item]
    })
    )
  }


  render() {

    const { menu, order, totalPrice, qty } = this.state
    return (
      <Router>
        <Switch>
          <Route
            exact path="/"
            render={() => <Home
              menu={menu}
              addItems={this.addItems}
              order={order}
              totalPrice={totalPrice}
              qty={qty}
              deleteItems={this.deleteItems}
              changeQty={this.changeQty}
            />}

          />
          <Route
            path="/category"
            render={() => <Order
              order={order}
              totalPrice={totalPrice}
              qty={qty}
              deleteItems={this.deleteItems}
              changeQty={this.changeQty}
            />}

          />
        </Switch>
      </Router>
    )
  }
}
