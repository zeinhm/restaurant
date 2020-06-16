import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faPlus } from '@fortawesome/free-solid-svg-icons'

export default class Menu extends Component {
  render() {
    const { addItems } = this.props
    return (
      <div className="menu">
        {
          this.props.menu.map((i, key) =>
            <div key={key} className="menu-item" onClick={() => addItems(i)}>
              <div>
                <div className="images">
                  <div>
                    <img src={require(`assets/images/${i.img}.jpg`)} alt="" />
                    <div className="add">
                      <FontAwesomeIcon icon={faPlus} />
                    </div>
                  </div>
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
