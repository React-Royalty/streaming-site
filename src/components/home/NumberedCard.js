import React from "react";

function NumberedCard({ handleCardClick, index, indivMedia }) {

  const numberIcons = [
    {
      number: 1,
      image: "https://i.imgur.com/d4YIlNl.png"
    },
    {
      number: 2,
      image: "https://i.imgur.com/TfA4aUr.png"
    },
    {
      number: 3,
      image: "https://i.imgur.com/wWsErq5.png"
    },
    {
      number: 4,
      image: "https://i.imgur.com/8l0fqBQ.png"
    },
    {
      number: 5,
      image: "https://i.imgur.com/kSJ1o3o.png"
    },
    {
      number: 6,
      image: "https://i.imgur.com/r7usmLb.png"
    },
    {
      number: 7,
      image: "https://i.imgur.com/foeNrzn.png"
    },
    {
      number: 8,
      image: "https://i.imgur.com/23Ovvjs.png"
    },
    {
      number: 9,
      image: "https://i.imgur.com/H0654S6.png"
    },
    {
      number: 10,
      image: "https://i.imgur.com/9yMmZsC.png"
    },
  ];


  return (
    <div className="slider__number-container">
      <img className="slider__number-container__number" src={numberIcons.find(num => num.number === index + 1).image}></img>
      <img onClick={(event) => handleCardClick(event)} className="slider__tall-card" src={indivMedia.tallTitleCard ? indivMedia.tallTitleCard.image : ""} alt={indivMedia.title + " Poster Title Card"}></img>
    </div>
  )
}

export default NumberedCard;