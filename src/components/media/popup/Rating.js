import React from "react";

function Rating({ media }) {

  //* MEDIA POP UP RATING (SECOND ROW) 
  // IF EXISTS: maturity rating, maturity rating description

  return (
    <div>
      { media.maturityRating ? <div className="rating">{ media.maturityRating }</div> : null }
      { media.maturityRatingDescription ? media.maturityRatingDescription : null }
    </div>
  );
}

export default Rating;