import React, { Component } from 'react'
import { Dropdown, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faClock, faShippingFast, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const orderData = [
  {
    id: 1,
    name: 'Pepperoni Pizza',
    restaurant: 'Mamma Rosy',
    rating: 4.5,
    price: 19.9,
    img: 'pepperoni-pizza',
    time: '40-50 min'
  },
  {
    id: 2,
    name: 'Hamburger',
    restaurant: 'Paulaner Brahaus',
    rating: 4.6,
    price: 14.9,
    img: 'hamburger',
    time: '15-20 min'
  },
  {
    id: 3,
    name: 'Salad',
    restaurant: 'Amigos',
    rating: 4.7,
    price: 16.9,
    img: 'salad',
    time: '30-40 min'
  },
  {
    id: 4,
    name: 'Ramen',
    restaurant: 'Aruba Caribbean',
    rating: 4.8,
    price: 7.9,
    img: 'ramen',
    time: '30-40 min'
  },
  {
    id: 5,
    name: 'Grilled Fish',
    restaurant: 'Por Que No',
    rating: 4.5,
    price: 26.9,
    img: 'grilled-fish',
    time: '50-60 min'
  },
  {
    id: 6,
    name: 'Chicken Soup',
    restaurant: 'Holy Smokes',
    rating: 4.5,
    price: 5.9,
    img: 'chicken-soup',
    time: '20-30 min'
  },
  {
    id: 7,
    name: 'Pepperoni Pizza',
    restaurant: 'Mamma Rosy',
    rating: 4.5,
    price: 19.9,
    img: 'pepperoni-pizza',
    time: '40-50 min'
  },
  {
    id: 8,
    name: 'Hamburger',
    restaurant: 'Paulaner Brahaus',
    rating: 4.6,
    price: 14.9,
    img: 'hamburger',
    time: '15-20 min'
  },
  {
    id: 9,
    name: 'Salad',
    restaurant: 'Amigos',
    rating: 4.7,
    price: 16.9,
    img: 'salad',
    time: '30-40 min'
  },
  {
    id: 10,
    name: 'Ramen',
    restaurant: 'Aruba Caribbean',
    rating: 4.8,
    price: 7.9,
    img: 'ramen',
    time: '30-40 min'
  },
  {
    id: 11,
    name: 'Grilled Fish',
    restaurant: 'Por Que No',
    rating: 4.5,
    price: 26.9,
    img: 'grilled-fish',
    time: '50-60 min'
  },
  {
    id: 12,
    name: 'Chicken Soup',
    restaurant: 'Holy Smokes',
    rating: 4.5,
    price: 5.9,
    img: 'chicken-soup',
    time: '20-30 min'
  },
]

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
