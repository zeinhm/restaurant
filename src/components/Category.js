import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faClock,
  faChevronDown,
  faPizzaSlice,
  faHamburger,
  faCheese,
  faCloudMeatball,
  faBreadSlice,
  faBacon,
  faHotdog,
  faPepperHot,
  faFish,
  faCocktail,
  faWineBottle,
  faUtensils
} from '@fortawesome/free-solid-svg-icons'

const categoryData = [
  {
    id: 1,
    name: "All",
    icon: faUtensils
  },
  {
    id: 2,
    name: "Pizza",
    icon: faPizzaSlice
  },
  {
    id: 3,
    name: "Hamburger",
    icon: faHamburger
  },
  {
    id: 4,
    name: "Dessert",
    icon: faCheese
  },
  {
    id: 5,
    name: "Drink",
    icon: faCocktail
  },
  {
    id: 6,
    name: "Meatball",
    icon: faCloudMeatball
  },
  {
    id: 7,
    name: "Bread",
    icon: faBreadSlice
  },
  {
    id: 8,
    name: "Bacon",
    icon: faBacon
  },
  {
    id: 9,
    name: "Sea Food",
    icon: faFish
  },
  {
    id: 10,
    name: "Hotdog",
    icon: faHotdog
  },
  {
    id: 11,
    name: "Spicy",
    icon: faPepperHot
  },
  {
    id: 12,
    name: "Beer",
    icon: faWineBottle
  },
]

export default class Category extends Component {
  render() {
    const settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
          }
        }
      ]
    }
    return (
      <div className="category">
        <div className="category-header">
          <div className="title">
            Restaurants
            <span>
              <img src={require('assets/images/hamburger.png')} alt="" />
            </span>
          </div>
          <div className="delivery-toggle">
            <FontAwesomeIcon icon={faClock} />
            &nbsp;  Delivery: &nbsp; <span>Now &nbsp; &nbsp;</span>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </div>
        <div className="category-option">
          <Slider {...settings}>
            {
              categoryData.map((i, key) =>
                <div className={`option option-${key}`} key={key}>
                  <div className="icon">
                    <FontAwesomeIcon icon={i.icon} />
                  </div>
                  <div className="name">
                    <p>{i.name}</p>
                  </div>
                </div>
              )
            }
          </Slider>
        </div>
      </div>
    )
  }
}
