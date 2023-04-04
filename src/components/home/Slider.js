import { useState, useEffect, useRef } from "react";
import { useOutletContext } from 'react-router-dom';
import { BsFillCaretLeftFill, BsFillCaretRightFill, BsFillPlayFill } from 'react-icons/bs'

import DetailedMedia from "../media/DetailedMedia";

const Slider = ({ category, categorysMedia }) => {
  const { media, setDetailedMedia, setDetailedMediaToggle } = useOutletContext();

  const [ sliderMedia, setSliderMedia ] = useState({});


  const slider = useRef(null)

  useEffect(() => {
    getSliderMedia();
  }, [])

  function getSliderMedia() {
    let mediaWithFeaturedPosters = categorysMedia.map(indivMedia => determinePoster(indivMedia));
    let shuffledMedia = shuffle(mediaWithFeaturedPosters);
    setSliderMedia(shuffledMedia);
  }

  function determinePoster(indivMedia) {
    const widePosters = indivMedia.posters.filter(poster => poster.wide);
    const randomPoster = widePosters[~~(Math.random() * widePosters.length)];
    indivMedia.featuredPoster = randomPoster;
    return indivMedia;
  }

  function shuffle(mediaToShuffle) {
    let currentIndex = mediaToShuffle.length, randomIndex;

    while ( currentIndex != 0 ) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [mediaToShuffle[currentIndex], mediaToShuffle[randomIndex]] = [mediaToShuffle[randomIndex], mediaToShuffle[currentIndex]];
    }
    return mediaToShuffle;
  }

  function handleCardClick(event) {
    const selectedCardAlt = (event.target.alt);
    const selectedTitle = selectedCardAlt.slice(0, -" Poster Title Card".length);
    const foundMedia = media.filter(indivMedia => indivMedia.title === selectedTitle);
    setDetailedMedia(foundMedia[0]);
    setDetailedMediaToggle(true);
  }

  const slideLeft = () => slider.current.scroll({ left: slider.current.scrollLeft - 500, behavior: 'smooth'});

  const slideRight = () => slider.current.scroll({ left: slider.current.scrollLeft + 500, behavior: 'smooth'});


  return (
      <section className="slider">
        <div className="slider__title">{category}</div>

        <div className="slider__box">
        <div onClick={slideLeft} className="slider__button slider__button--left"><BsFillCaretLeftFill /></div>
        
        <div ref={slider} className="slider__content">
            {
              sliderMedia.length ? sliderMedia.map((indivMedia, index) => {
                return <img onClick={(event) => handleCardClick(event)} className="slider__card" key={index} src={indivMedia.featuredPoster.image} alt={indivMedia.title + " Poster Title Card"}></img>
              }) : null
            }
          </div>

          <div onClick={slideRight} className="slider__button slider__button--right"><BsFillCaretRightFill /></div>
        </div>
      </section>
  )
}

export default Slider