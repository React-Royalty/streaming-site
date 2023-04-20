import React from "react";

function LoadingSlider() {
  return (
    <section className="slider margin-left">
      <div className="slider__title">&nbsp;</div>
      <div className="slider__box">
      
        <div className="slider__content">
          <img className="empty slider__card loading-animation" src="https://i.imgur.com/abACQHn.png" alt="Empty Slider Poster Title Card" ></img>
          <img className="empty slider__card loading-animation" style={{ animationDelay: "0.5s" }} src="https://i.imgur.com/abACQHn.png" alt="Empty Slider Poster Title Card" ></img>
          <img className="empty slider__card loading-animation" style={{ animationDelay: "1s" }} src="https://i.imgur.com/abACQHn.png" alt="Empty Slider Poster Title Card" ></img>
          <img className="empty slider__card loading-animation" style={{ animationDelay: "1.5s" }} src="https://i.imgur.com/abACQHn.png" alt="Empty Slider Poster Title Card" ></img>
          <img className="empty slider__card loading-animation" style={{ animationDelay: "2s" }} src="https://i.imgur.com/abACQHn.png" alt="Empty Slider Poster Title Card" ></img>
          <img className="empty slider__card loading-animation" style={{ animationDelay: "2.5s" }} src="https://i.imgur.com/abACQHn.png" alt="Empty Slider Poster Title Card" ></img>
          <img className="empty slider__card loading-animation" style={{ animationDelay: "3s" }} src="https://i.imgur.com/abACQHn.png" alt="Empty Slider Poster Title Card" ></img>
        </div>

      </div>
    </section>
  );
}

export default LoadingSlider;