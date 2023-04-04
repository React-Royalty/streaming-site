import { useEffect, useRef } from "react";
import { useOutletContext } from 'react-router-dom';

import { BsFillPlayFill, BsPlusLg, BsHandThumbsUp, BsHandThumbsUpFill, BsVolumeMute } from 'react-icons/bs';
import { BiMessageDetail } from 'react-icons/bi';

import DetailList from "./DetailList";
import SimilarMedia from "./SimilarMedia";
import AboutMedia from "./AboutMedia";

function DetailedMedia() {

  console.log("inside detailed media");
  const { detailedMedia } = useOutletContext();
  console.log(detailedMedia);

  useEffect(() => {
    determinePoster();
  }, [])

  function determinePoster() {
    const widePosters = detailedMedia.posters.filter(poster => poster.wide);
    const randomPoster = widePosters[~~(Math.random() * widePosters.length)];
    detailedMedia.featuredPoster = randomPoster;
  }

  const tempCast = ["Florence Pugh", "Tessa Thompson", "Jodie Comer", "Andrew Garfield", "Tom Holland", "Cate Blanchett", "Sandra Oh", "Zendaya" ];
  const tempGenres = ["Teen Movies", "Comedies"];
  const tempVibes = ["Understated", "Intimate", "Bittersweet"];


  return (
    <div className="detailed-media" >

      <header>
        <img src={detailedMedia.featuredPoster ? detailedMedia.featuredPoster.image : ""} ></img>
        <div className="detailed-media__overlay">
          {/* <h1>{detailedMedia.title}</h1> */}
          <div className="sep-row">
            <div className="row">
              <button className="play-btn"><BsFillPlayFill className="play-icon"/>Play</button>
              <BsPlusLg className="circled-btn" />
              <BsHandThumbsUp className="circled-btn" />
            </div>
            <div><BsVolumeMute className="circled-btn__volume" /></div>
          </div>
        </div>
      </header>

      <section>
        <div>
          <div className="row">
            <h4>2015</h4>
            <h4>1h 52m</h4>
            <div className="hd">HD</div>
            <BiMessageDetail className="subtitle-icon"/>
          </div>
          <div className="row">
            <div className="rating">PG-13</div>
            <p>a suggestive comment</p>
          </div>
          <h3 className="row"><BsHandThumbsUpFill className="most-liked-icon"/>Most Liked</h3>
          <p>{detailedMedia.description}</p>
        </div>
        <div className="detailed-media__bonus-info">
          <DetailList title="Cast" contents={tempCast} />
          <DetailList title="Genres" contents={tempGenres} />
          <DetailList title="This movie is" contents={tempVibes} />
        </div>
      </section>

      <SimilarMedia />

      <AboutMedia media={detailedMedia} />

    </div>
  );
}

export default DetailedMedia;