import React from "react";
import DetailList from "./DetailList";

function BonusInfo({ media }) {

  //* MEDIA POP UP BONUS INFO (RIGHT SIDE COLUMN) 
  // IF EXISTS: cast, genres, vibes
  // TODO: FIX media.organizedCrew only working on file save not on reload
  // console.log("Cast", media.organizedCrew.cast);  // TODO: WTF IS DIFFERENT ABOUT THIS THAT IT WONT WORK


  return (
    <div className="detailed-media__bonus-info">
      {/* { media.organizedCrew.cast.length ? <DetailList title="Cast" contents={media.organizedCrew.cast} /> : null } */}
      { media.genres && media.genres.length ? <DetailList title="Genre" contents={media.genres} /> : null }
      { media.vibes && media.vibes.length ? <DetailList title="Vibe" contents={media.vibes} /> : null }
    </div>
  );
}

export default BonusInfo;