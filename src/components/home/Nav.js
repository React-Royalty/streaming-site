import React from "react";
import { Link, useOutletContext } from "react-router-dom";

import { IoMdSettings } from 'react-icons/io';
import SearchBar from "./SearchBar";


function Nav() {

  const { detailedMediaToggle, searchTerm } = useOutletContext();


  return (
      <nav className={ searchTerm !== "" ? "home-nav noblur" : "home-nav"}> 
        <img className="home-nav__logo home-nav__logo--large" alt="logo" src="https://i.imgur.com/WSTq2Le.png"/>
        <img className="home-nav__logo home-nav__logo--small" alt="logo" src="https://i.imgur.com/kfYpP2i.png"/>
        {/* <div className="home-nav__navigation-container">

        </div> */}
        <SearchBar />

        <div className="home-nav__user-nav">
          <Link to="/profile" className="home-nav__user">
            <img className="home-nav__user--photo" alt="account icon" src="https://i.imgur.com/ijG3GnA.png"/> 
          </Link>
          <div className="home-nav__user-icon-box">
            <IoMdSettings className="home-nav__user-settings" alt="settings icon"/> 
          </div>
        </div>
      </nav>
  )
}

export default Nav;