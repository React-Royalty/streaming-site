import React from 'react'

import { IoMdSettings } from 'react-icons/io'
import { BiSearch } from 'react-icons/bi'

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

      <section className="home__featured">Featured</section>

      <section className="home__media-slider">Media Slider</section>
      <section className="home__media-slider">Media Slider</section>
      <section className="home__media-slider">Media Slider</section>
      <section className="home__media-slider">Media Slider</section>
      <section className="home__media-slider">Media Slider</section>
      <section className="home__media-slider">Media Slider</section>


{/*       
      TEST FIXED POSITION FOR NAVIGATION
        <p>K</p>
        <p>K</p>
        <p>K</p>
        <p>K</p>
        <p>K</p>
        <p>K</p>
        <p>K</p>
        <p>K</p>
        <p>K</p>
        <p>K</p>
        <p>K</p>
        <p>K</p>
        <p>K</p>
        <p>K</p>
        <p>K</p>
        <p>K</p>
        <p>K</p>
        <p>K</p>  
        <p>K</p>
        <p>K</p>  
        <p>K</p>
        <p>K</p>
        <p>K</p>
        <p>K</p>  
        <p>K</p> */}

    </div>
  )
}

export default Home