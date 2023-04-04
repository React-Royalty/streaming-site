import React from "react";
import DetailList from "./DetailList";

function AboutMedia({ media }) {

  const tempDirectors = ["Jennifer Kaytin Robinson" ];
  const tempCast = ["Florence Pugh", "Tessa Thompson", "Jodie Comer", "Andrew Garfield", "Tom Holland", "Cate Blanchett", "Sandra Oh", "Zendaya" ];
  const tempWriters = ["Celeste Ballard", "Jennifer Kaytin Robinson"];
  const tempGenres = ["Teen Movies", "Comedies"];
  const tempVibes = ["Understated", "Intimate", "Bittersweet"];


  return (
    <div>
      <h1>About {media.title}</h1>
      <div className="detail-list__full">
        <DetailList title="Director" contents={tempDirectors} />
        <DetailList title="Cast" contents={tempCast} />
        <DetailList title="Writer" contents={tempWriters} />
        <DetailList title="Genres" contents={tempGenres} />
        <DetailList title="This movie is" contents={tempVibes} />
        <div className="detail-list"><strong>Maturity Rating: </strong>
          <div className="list-item">
            <div className="rating buffer">PG-13</div>
            language, substances
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMedia;