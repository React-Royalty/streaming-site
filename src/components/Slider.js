import { useRef } from 'react'

// Slider Icons
import { BsFillCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs'

function Slider() {
  // Slider Functionality
  const slider = useRef(null)

  const slideLeft = (event) => {
    slider.current.scroll({ left: slider.current.scrollLeft -500, behavior: 'smooth'}) 
    console.log(slider)
  }

  const slideRight = (event) => {
    slider.current.scroll({ left: slider.current.scrollLeft + 500, behavior: 'smooth'}) 
    console.log(slider)
  }

  return (
    <section className="home__slider slider">
        <div className="slider__title">Sing 2</div>
        {/* SLIDER BOX = CONTENT + BUTTONS */}
        <div className="slider__box">
        <div onClick={slideLeft} className="slider__button slider__button--left">
            <BsFillCaretLeftFill /></div>
        <div ref={slider} className="slider__content">
            {/* Cards Start */}
            <img className="slider__card" src="https://i.imgur.com/bAZ1M84.jpg" />
            <img className="slider__card" src="https://i.imgur.com/bAZ1M84.jpg" />
            <img className="slider__card" src="https://i.imgur.com/bAZ1M84.jpg" />
            <img className="slider__card" src="https://i.imgur.com/bAZ1M84.jpg" />
            <img className="slider__card" src="https://i.imgur.com/bAZ1M84.jpg" />
            <img className="slider__card" src="https://i.imgur.com/bAZ1M84.jpg" />
            <img className="slider__card" src="https://i.imgur.com/bAZ1M84.jpg" />
            <img className="slider__card" src="https://i.imgur.com/bAZ1M84.jpg" />
            <img className="slider__card" src="https://i.imgur.com/bAZ1M84.jpg" />
            <img className="slider__card" src="https://i.imgur.com/bAZ1M84.jpg" />
            <img className="slider__card" src="https://i.imgur.com/bAZ1M84.jpg" />
            <img className="slider__card" src="https://i.imgur.com/bAZ1M84.jpg" />
            {/* Cards End */}
          </div>
          <div onClick={slideRight} className="slider__button slider__button--right">
            <BsFillCaretRightFill /></div>
        </div>
      </section>
  )
}

export default Slider