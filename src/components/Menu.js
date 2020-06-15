import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { menuData } from 'data'

export default class Menu extends Component {
  render() {

    return (
      <div className="menu">
        {
          menuData.map((i, key) =>
            <div key={key} className="menu-item">
              <div>
                <div className="images">
                  <div><img src={require(`assets/images/${i.img}.jpg`)} alt="" /></div>
                  <div className="time">{i.time}</div>
                </div>
                <div className="desc">
                  <div className="title">
                    <p>{i.restaurant}</p>
                  </div>
                  <div className="detail">
                    <span className="star"><FontAwesomeIcon icon={faStar} /></span>
                    <span>&nbsp;</span>
                    <span className="rating-point">{i.rating}</span>
                    <span>&nbsp;</span>
                    <span>&middot;</span>
                    <span>&nbsp;</span>
                    <span className="food-name">{i.name}</span>
                    <span>&nbsp;</span>
                    <span>&middot;</span>
                    <span>&nbsp;</span>
                    <span className="price">${i.price}</span>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      </div>
    )
  }
}
