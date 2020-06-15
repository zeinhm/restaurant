import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Warning extends Component {
  render() {
    return (
      <div className="warning">
        <h2>This page is just for mobile Devices!</h2>
        <h2><Link to="/">Go Back</Link></h2>
      </div>
    )
  }
}
