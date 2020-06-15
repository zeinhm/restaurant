import React, { Component } from 'react'
import { Dropdown, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faClock, faShippingFast, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { orderData } from 'data'

export default class Order extends Component {

  state = {
    qty: 1,
    totalPrice: 0
  }

  componentDidMount() {
    this.getPrice()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.qty !== this.state.qty) {
      this.getTotalPrice(this.state.qty, this.getPrice())
    }
  }

  changeQty = action => {
    this.setState(prevState => ({
      qty: action === "increment" ? prevState.qty + 1 : (prevState.qty > 1 ? prevState.qty - 1 : prevState.qty)
    }))
  }

  getTotalPrice = (qty, price) => {
    console.log(qty)
    this.setState({
      totalPrice: (qty * price).toFixed(2)
    })
  }

  getPrice = () => {
    const price = orderData.reduce((total, item) => total + item.price, 0).toFixed(2)
    this.setState({
      totalPrice: price
    })
    return price
  }

  render() {

    return (
      <div className="order">
        <Row>
          <div className="title">
            <p>My Order <span><img src={require('assets/images/cool-emoji.png')} alt="" /></span></p>
          </div>
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">
              <FontAwesomeIcon icon={faUser} />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#">Login</Dropdown.Item>
              <Dropdown.Item href="#">Register</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Row>
        <Row>
          <div className="order-list-container">
            <div className="address">
              <div className="street">
                <p>625 St Marks Ave</p> <span>Edit</span>
              </div>
              <div className="time">
                <p><span><FontAwesomeIcon icon={faClock} /></span> &nbsp; 35 min</p> <span>Choose time</span>
              </div>
            </div>
            <div className="order-list">
              <table size="sm">
                {
                  orderData.map((i, key) =>
                    <tr key={key} className="item">
                      <td className="img"><img src={require(`assets/images/${i.img}.jpg`)} alt="" /></td>
                      <td className="qty"><p>&nbsp;1 x&nbsp;</p></td>
                      <td className="name"><p>{i.name}</p></td>
                      <td className="price"><span>${i.price}</span></td>
                    </tr>
                  )
                }
              </table>
            </div>
          </div>
        </Row>
        <Row>
          <div className="delivery">
            <div className="icon">
              <FontAwesomeIcon icon={faShippingFast} />
            </div>
            <div className="title">Delivery</div>
            <div className="price">$0.00</div>
          </div>
        </Row>
        <Row>
          <div className="total">
            <div className="price"><p>Total:</p> <span>${this.state.totalPrice}</span></div>
            <div className="divider" />
            <div className="amount">
              <div className="person">
                <p>Persons</p>
                <div>
                  <div className="decrement" onClick={() => this.changeQty("decrement")}>-</div>
                  <div className="qty">{this.state.qty}</div>
                  <div className="increment" onClick={() => this.changeQty("increment")}>+</div>
                </div>
              </div>
              <div className="checkout">
                Checkout &nbsp;&nbsp; <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
          </div>
        </Row>
      </div>
    )
  }
}
