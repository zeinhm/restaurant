import React, { Component } from 'react'
import { Dropdown } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

export default class Order extends Component {
  render() {
    return (
      <div className="order">
        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic">
            <FontAwesomeIcon icon={faUser} />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#">Login</Dropdown.Item>
            <Dropdown.Item href="#">Register</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    )
  }
}
