import React, { useRef } from 'react'

import Slider from './Slider.js'

// Navbar Icons
import { IoMdSettings } from 'react-icons/io'
import { BiSearch } from 'react-icons/bi'
import { GiHamburgerMenu } from 'react-icons/gi'

// Featured Section Icons
import { BsFillPlayFill } from 'react-icons/bs'
import { BiInfoCircle } from 'react-icons/bi'

// DIFFERENT HOME PAGE BASED ON LOG IN
// function Home() {
//   if (isLoggedIn) {
//     return (
//       <LoggedIn />
//     )
//   } else {
//     return (
//       <NotLoggedIn />
//     )
//   }
// }

function Home() {
  return (
    <div className="home">

      {/* Home Nav START */}
      <nav className="home-nav"> 
        <img className="home-nav__logo home-nav__logo--large" alt="logo" src="https://i.imgur.com/WSTq2Le.png"/>
        <img className="home-nav__logo home-nav__logo--small" alt="logo" src="https://i.imgur.com/kfYpP2i.png"/>
        {/* <div className="home-nav__navigation-container">

        </div> */}
        <form className="home-nav__search-form">
          <input type="text" className="home-nav__search-input" placeholder="Search movies and shows" />
          <button name="search" className="home-nav__search-button">
            <BiSearch className="home-nav__search-button--icon"/>
          </button>
        </form>
        <div className="home-nav__user-nav">
          <div className="home-nav__user">
            <img className="home-nav__user--photo" alt="account icon" src="https://i.imgur.com/7PG0Tup.png"/> 
          </div>
          <div className="home-nav__user-icon-box">
            <IoMdSettings className="home-nav__user-settings" alt="settings icon"/> 
          </div>
        </div>
      </nav>  {/* Home Nav END */}

      {/* Featured Start */}
      <section className="featured">
        <img className="featured__poster" src="https://i.imgur.com/SoGiCOE.png" alt="featured movie poster" />
        <div className="featured__textbox">
          <div className="featured__title">
            <span className="featured__title--main">Spider-Man</span>
            <span className="featured__title--sub">Into the Spiderverse</span>
          </div>
          <p className="featured__description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus
          </p>
          <a href="#" className="btn btn--featured">
            <span className="btn__icon">< BsFillPlayFill /></span>
            <span className="btn__text"> Play</span></a>
            <a href="#" className="btn btn--featured">
            <span className="btn__icon">< BiInfoCircle /></span>
            <span className="btn__text"> Info</span></a>
        </div>
      </section>
      {/* Featured End */}

      <Slider />
      <Slider />
      <Slider />
      <Slider />
      <Slider />
      <Slider />
      <Slider />
      <Slider />
      <Slider />
      <Slider />
      <Slider />
      <Slider />
      <Slider />
      <Slider />

    </div>
  )
}

export default Home