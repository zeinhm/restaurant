import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default class Menu extends Component {
  render() {
    const menu = [
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
      {
        id: 13,
        name: 'Pepperoni Pizza',
        restaurant: 'Mamma Rosy',
        rating: 4.5,
        price: 19.9,
        img: 'pepperoni-pizza',
        time: '40-50 min'
      },
      {
        id: 14,
        name: 'Hamburger',
        restaurant: 'Paulaner Brahaus',
        rating: 4.6,
        price: 14.9,
        img: 'hamburger',
        time: '15-20 min'
      },
      {
        id: 15,
        name: 'Salad',
        restaurant: 'Amigos',
        rating: 4.7,
        price: 16.9,
        img: 'salad',
        time: '30-40 min'
      },
      {
        id: 16,
        name: 'Ramen',
        restaurant: 'Aruba Caribbean',
        rating: 4.8,
        price: 7.9,
        img: 'ramen',
        time: '30-40 min'
      },
      {
        id: 17,
        name: 'Grilled Fish',
        restaurant: 'Por Que No',
        rating: 4.5,
        price: 26.9,
        img: 'grilled-fish',
        time: '50-60 min'
      },
      {
        id: 18,
        name: 'Chicken Soup',
        restaurant: 'Holy Smokes',
        rating: 4.5,
        price: 5.9,
        img: 'chicken-soup',
        time: '20-30 min'
      },
    ]

    return (
      <div className="menu">
        {
          menu.map((i, key) =>
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
