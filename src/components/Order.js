import React, { Component } from 'react'
import { Dropdown, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

export default class Order extends Component {
  render() {
    return (
      <div className="order">
        <Row>
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

        </Row>
      </div>
    )
  }
}
