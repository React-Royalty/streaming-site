import React from "react";
import DetailList from "./DetailList";

function AboutMedia({ media }) {
  // TODO: FIX media.organizedCrew only working on file save not on reload
  console.log("media", media)

  return (
    <div>
      <h1>About {media.title}</h1>
      <div className="detail-list__full">
        { media.organizedCrew.directors && media.organizedCrew.directors.length ? <DetailList title="Director" contents={media.organizedCrew.directors} /> : null }
        { media.organizedCrew.creators && media.organizedCrew.creators.length ? <DetailList title="Creator" contents={media.organizedCrew.creators} /> : null }
        { media.organizedCrew.cast && media.organizedCrew.cast.length ? <DetailList title="Cast" contents={media.organizedCrew.cast} /> : null }
        { media.organizedCrew.writers && media.organizedCrew.writers.length ? <DetailList title="Writer" contents={media.organizedCrew.writers} /> : null }
        { media.genres && media.genres.length ? <DetailList title="Genre" contents={media.genres} /> : null }
        { media.vibes && media.vibes.length ? <DetailList title="Vibe" contents={media.vibes} /> : null }
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