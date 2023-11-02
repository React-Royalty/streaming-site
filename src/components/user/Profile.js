import React, { useEffect } from "react";
import { useOutletContext, Link } from "react-router-dom";


import Login from "./Login";


function Profile() {

  const { loggedIn, setLoggedIn, setUserData } = useOutletContext();

  function logOut() {
    localStorage.removeItem("token");
    setUserData({});
    setLoggedIn(false);
}

  console.log("logged in on profile?", loggedIn)

  return (
    <div>
      <nav className="home-nav">
        <Link to="/"><img className="home-nav__logo home-nav__logo--large" alt="logo" src="https://i.imgur.com/WSTq2Le.png"/></Link>
        <Link to="/"><img className="home-nav__logo home-nav__logo--small" alt="logo" src="https://i.imgur.com/kfYpP2i.png"/></Link>
      </nav>
      {
        loggedIn ? 
          <section className="profile">
            <h1>PROFILE</h1>
            <div onClick={logOut}>logout</div>
          </section>
        :
          <Login />
      }
    </div>
  )
}

export default Profile;