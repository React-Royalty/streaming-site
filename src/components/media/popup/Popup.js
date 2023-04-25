import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

import { AiOutlineClose } from "react-icons/ai";
import { BsFillPlayFill, BsPlusLg, BsHandThumbsUp, BsHandThumbsUpFill, BsVolumeMute } from "react-icons/bs";

import { fetchMediaByTitle } from "../../../api/media";
import Stats from "./Stats";
import Rating from "./Rating";
import BonusInfo from "./BonusInfo";
import SimilarMedia from "./SimilarMedia";
import AboutMedia from "./AboutMedia";

function Popup() {

  const { detailedMediaTitle, setDetailedMediaTitle, setDetailedMediaToggle } = useOutletContext();

  const [ detailedMedia, setDetailedMedia ] = useState({});


  useEffect(() => {
    fetchDetailedMedia();
  }, [])


  async function fetchDetailedMedia() {
    const mediaByTitleFetchData = await fetchMediaByTitle(detailedMediaTitle);
    if (mediaByTitleFetchData.success) {
      // console.log("the DETAILED MEDIA!!! bitch", mediaByTitleFetchData.media)
      setDetailedMedia(mediaByTitleFetchData.media);
    }
  }


  async function unselectDetailedMedia(event) {
    // Removed onBlur from "detailed-media" div. added parent container "fuckity". which uses function clickOutDetailedMedia
    setDetailedMediaToggle(false);
    setDetailedMediaTitle("");
    setDetailedMedia({});
  }

  async function clickOutDetailedMedia(event) {
    if (event.target.id == "detailed-media-parent") {
      setDetailedMediaToggle(false);
      setDetailedMediaTitle("");
      setDetailedMedia({});
    }
  }


  return (
    <div className="fuckity" id="detailed-media-parent" onClick={clickOutDetailedMedia} style={{position: "fixed", display: "flex", width: "100vw", height: "100vh", alignItems: "flex-start", justifyContent: "center", overflowY:"scroll"}}>
      <div className="detailed-media" >
      {/* onFocus={()=>console.log("focused")} onBlur={(event) => unselectDetailedMedia(event)} */}

        <header>
          {
            detailedMedia.featuredPoster ? 
              <img className="featured-poster" src={detailedMedia.featuredPoster.image} ></img>
              :
              <div className="featured-poster placeholder"><div className="spinner"></div></div>
          }
          
          <AiOutlineClose className="circled-btn detailed-media__close-btn" onClick={(event) => unselectDetailedMedia(event)}/>
          <div className="detailed-media__overlay">
            <img className="title-logo" src={detailedMedia.titleLogo ? detailedMedia.titleLogo.image : ""} ></img>
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
            <Stats media={detailedMedia} />
            <Rating media={detailedMedia} />
            { detailedMedia ? <h3 className="row"><BsHandThumbsUpFill className="most-liked-icon"/>Most Liked</h3> : null }
            { detailedMedia.description ? <p>{detailedMedia.description}</p> : null }
          </div>
          <BonusInfo media={detailedMedia} />
        </section>

        <SimilarMedia />
        {/* { detailedMedia ? <AboutMedia media={detailedMedia}/> : null } */}
        <AboutMedia media={detailedMedia}/>
      </div>
    </div>
  );
}

export default Popup;