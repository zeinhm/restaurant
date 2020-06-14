import React, { Component } from 'react'
import { Navbar, Form, FormControl } from 'react-bootstrap'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default class Navigation extends Component {
  render() {
    return (
      <div className="navigation-bar">
        <Navbar bg="light" expand="sm">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <div className="brand">
            <FontAwesomeIcon icon={faBars} />
            <Navbar.Brand href="#home">Chukwudi</Navbar.Brand>
          </div>
          <Navbar.Collapse id="basic-navbar-nav">
            <Form inline>
              <FormControl type="text" placeholder="&#xF002; &nbsp; Search" style={{ fontFamily: 'Arial, FontAwesome' }} className="mr-sm-2" />
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}
