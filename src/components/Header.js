import React, { Component } from 'react'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="content">
          <div className="happy-people">
            <img src={require('assets/images/female.png')} alt="" />
            <img src={require('assets/images/male.png')} alt="" />
          </div>
          <div className="discount">
            <div>
              <p>0$ delivery for 30 days! <span><img src={require('assets/images/hat.png')} alt="" /></span></p>
              <p>0$ delivery free for orders over $10 for 30 days</p>
            </div>
          </div>
          <div className="learn-more">
            <div>Learn More &nbsp; <FontAwesomeIcon icon={faArrowRight} /></div>
          </div>
        </div>
      </div>
    )
  }
}
