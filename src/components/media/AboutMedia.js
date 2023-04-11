import React from "react";
import DetailList from "./DetailList";

function AboutMedia({ media, organizedCrew, organizedCategories }) {


  return (
    <div>
      <h1>About {media.title}</h1>
      <div className="detail-list__full">
        { organizedCrew.directors && organizedCrew.directors.length ? <DetailList title="Director" contents={organizedCrew.directors} /> : null }
        { organizedCrew.creators && organizedCrew.creators.length ? <DetailList title="Creator" contents={organizedCrew.creators} /> : null }
        { organizedCrew.cast && organizedCrew.cast.length ? <DetailList title="Cast" contents={organizedCrew.cast} /> : null }
        { organizedCrew.writers && organizedCrew.writers.length ? <DetailList title="Writer" contents={organizedCrew.writers} /> : null }
        { organizedCategories.genres && organizedCategories.genres.length ? <DetailList title="Genre" contents={organizedCategories.genres} /> : null }
        { organizedCategories.vibes && organizedCategories.vibes.length ? <DetailList title="This movie is" contents={organizedCategories.vibes} /> : null }
        <div className="detail-list"><strong>Maturity Rating: </strong>
          <div className="list-item">
            <div className="rating left-buffer">{media.maturityRating}</div>
            {media.maturityRatingDescription}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMedia;