import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

import { BsFillPlayFill } from 'react-icons/bs';
import { BiInfoCircle } from 'react-icons/bi';


function Featured() {

  const { media, setDetailedMedia, setDetailedMediaToggle, featuredMedia } = useOutletContext();
  // console.log("featuredMedia", featuredMedia);


  // useEffect(() => {
  //   determinePosters(); // TODO: FIX! moved this bs and get rid of hard coded image urls
  // }, [])


  async function determinePosters() {
    console.log("featuredMedia.posters", featuredMedia.posters);
    const featuredPosters = featuredMedia.posters.filter(poster => poster.featured);
    featuredMedia.featuredPoster = featuredPosters[~~(Math.random() * featuredPosters.length)];
    
    const titleLogos = featuredMedia.posters.filter(poster => poster.titleLogo);
    featuredMedia.titleLogo = titleLogos[~~(Math.random() * titleLogos.length)];
    console.log("FEATURED MEDIA DATA", featuredMedia)
  }


  function handleMoreInfoClick() {
    const selectedTitle = "Spider-Man: Into the Spider-Verse"
    const foundMedia = media.filter(indivMedia => indivMedia.title === selectedTitle);
    setDetailedMedia(foundMedia[0]);
    setDetailedMediaToggle(true);
  }


  return (
    <section className="featured">
      <img className="featured__poster" src="https://i.imgur.com/10gQhzy.png" alt="featured movie poster" />
      <div className="featured__overlay">
        <img className="featured__title" src="https://i.imgur.com/TlUhZiG.png"></img>
        <p className="featured__description">{ featuredMedia.description ? featuredMedia.description : "" }</p>
        <div className="featured__btn-container">
          <button className="icon-btn"><BsFillPlayFill className="play-icon"/>Play</button>
          <button className="icon-btn__secondary" onClick={handleMoreInfoClick}><BiInfoCircle className="info-icon"/>More Info</button>
        </div>
      </div>
    </section>
  )
}

export default Featured;