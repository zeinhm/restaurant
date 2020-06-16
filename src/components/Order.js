import React, { Component } from 'react'
import { Dropdown, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faClock, faShippingFast, faArrowRight, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

export default class Order extends Component {
  render() {
    const { order, qty, totalPrice, deleteItems, changeQty } = this.props
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
                  order.map((i, key) =>
                    <tr key={i.id} className="item">
                      <td className="img">
                        <div onClick={() => deleteItems(i.id)} className="delete-icon">
                          <FontAwesomeIcon icon={faTrashAlt} />
                        </div>
                        <img src={require(`assets/images/${i.img}.jpg`)} alt="" />
                      </td>
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
            <div className="price"><p>Total:</p> <span>${totalPrice}</span></div>
            <div className="divider" />
            <div className="amount">
              <div className="person">
                <p>Persons</p>
                <div>
                  <div className="decrement" onClick={() => changeQty("decrement")}>-</div>
                  <div className="qty">{qty}</div>
                  <div className="increment" onClick={() => changeQty("increment")}>+</div>
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
