import React, { Component } from 'react'
import { Navbar, Form, FormControl, Dropdown, DropdownButton, NavLink } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default class Navigation extends Component {
  render() {
    return (
      <div className="navigation-bar">
        <Navbar bg="light" expand="sm">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <div className="brand">
            <FontAwesomeIcon icon={faBars} />
            <Navbar.Brand>
              <Link to="/">Chukwudi</Link>
            </Navbar.Brand>
          </div>
          <DropdownButton title={[<FontAwesomeIcon icon={faUser} />]} drop='left'>
            <Dropdown.Item href="#">Login</Dropdown.Item>
            <Dropdown.Item href="#">Register</Dropdown.Item>
          </DropdownButton>
          <Navbar.Collapse id="basic-navbar-nav">
            <NavLink>
              <Link to="/category">My Order</Link>
            </NavLink>
            <Form inline>
              <FormControl type="text" placeholder="&#xF002; &nbsp; Search" style={{ fontFamily: 'Arial, FontAwesome' }} className="mr-sm-2" />
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}
