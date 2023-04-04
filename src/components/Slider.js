import { useState, useEffect, useRef } from "react";
import { BsFillCaretLeftFill, BsFillCaretRightFill, BsFillPlayFill } from 'react-icons/bs'

const Slider = ({ category, media }) => {
  const [ mediaToPost, setMediaToPost ] = useState({});

  const slider = useRef(null)

  useEffect(() => {
    getMedia(); // TODO: stop this from not coming up with anything on refresh
  }, [])

  function getMedia() {
    let mediaWithFeaturedPoster = media.map(indivMedia => determinePoster(indivMedia));
    let shuffledMedia = shuffle(mediaWithFeaturedPoster);
    setMediaToPost(shuffledMedia);
  }

  function determinePoster(media) {
    const widePosters = media.posters.filter(poster => poster.wide);
    const randomPoster = widePosters[~~(Math.random() * widePosters.length)];
    media.featuredPoster = randomPoster;
    return media;
  }

  
  function shuffle(media) {
    let currentIndex = media.length, randomIndex;

    while ( currentIndex != 0 ) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [media[currentIndex], media[randomIndex]] = [media[randomIndex], media[currentIndex]];
    }
    return media;
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
            mediaToPost.length ? mediaToPost.map((indivMedia, index) => {
              return <img className="slider__card" key={index} src={indivMedia.featuredPoster.image} alt={indivMedia.title + "Poster Title Card"}></img>
            }) : null
          }
        </div>

        <div onClick={slideRight} className="slider__button slider__button--right"><BsFillCaretRightFill /></div>
      </div>
    </section>
  )
}

export default Slider