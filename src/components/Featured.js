import React from "react";

import { BsFillPlayFill } from 'react-icons/bs';
import { BiInfoCircle } from 'react-icons/bi';


function Featured() {
  return (
      <section className="featured">
        <img className="featured__poster" src="https://i.imgur.com/X8X7JS6.png" alt="featured movie poster" />
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
  )
}

export default Featured;