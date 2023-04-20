import { useState, useEffect, useRef } from "react";
import { useOutletContext } from 'react-router-dom';

import { AiOutlineClose } from "react-icons/ai";
import { BsFillPlayFill, BsPlusLg, BsHandThumbsUp, BsHandThumbsUpFill, BsVolumeMute } from 'react-icons/bs';
import { BiMessageDetail } from 'react-icons/bi';

import DetailList from "./DetailList";
import SimilarMedia from "./SimilarMedia";
import AboutMedia from "./AboutMedia";

function DetailedMedia() {

  const { detailedMedia, setDetailedMedia, setDetailedMediaToggle } = useOutletContext();

  const [ organizedCrewMembers, setOrganizedCrewMembers ] = useState({});
  const [ organizedCategories, setOrganizedCategories ] = useState({});

  useEffect(() => {
    determineCrewRoles();
    determineCategoryTypes();
  }, [])

  function determineCrewRoles() {
    const tempOrganizedCrewMembers = {};
    tempOrganizedCrewMembers.directors = detailedMedia.crew.filter(crewMember => crewMember.director);
    tempOrganizedCrewMembers.creators = detailedMedia.crew.filter(crewMember => crewMember.creator);
    tempOrganizedCrewMembers.writers = detailedMedia.crew.filter(crewMember => crewMember.writer);
    tempOrganizedCrewMembers.cast = detailedMedia.crew.filter(crewMember => crewMember.cast);
    setOrganizedCrewMembers(tempOrganizedCrewMembers);
  }


  function determineCategoryTypes() {
    const tempOrganizedCategories = {};
    tempOrganizedCategories.genres = detailedMedia.categories.filter(category => category.genre);
    tempOrganizedCategories.vibes = detailedMedia.categories.filter(category => category.vibe);

    setOrganizedCategories(tempOrganizedCategories);
  }




  async function unselectDetailedMedia(event) {
    // console.log("clicked off!!!!!!!!!!!!!!!!!!!!!") // TODO: make work
                                                    // Made Work. Removed onBlur from 'detailed-media' div. added parent container 'fuckity'. which uses function clickOutDetailedMedia
    // console.log("event", event)
    setDetailedMediaToggle(false)
    setDetailedMedia({});
  }

  async function clickOutDetailedMedia(event) {

    console.log(event.target)
    if (event.target.id == 'detailed-media-parent') {
      setDetailedMediaToggle(false)
      setDetailedMedia({});
    }
  }


  return (
    <div className='fuckity' id='detailed-media-parent'onClick={clickOutDetailedMedia} style={{position: "fixed", display: "flex", width: "100vw", height: "100vh", alignItems: "flex-start", justifyContent: "center", overflowY:"scroll"}}>
      <div className="detailed-media" >
      {/* onFocus={()=>console.log('focused')} onBlur={(event) => unselectDetailedMedia(event)} */}

        <header>
          <img  className="featured-poster" src={detailedMedia.featuredPoster ? detailedMedia.featuredPoster.image : ""} ></img>
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
            <div className="row">
              <h4>{ detailedMedia.releaseYear ? detailedMedia.releaseYear : null }</h4>
              <h4>{ detailedMedia.seasonsAvailable ? detailedMedia.seasonsAvailable + " Seasons" : null }</h4>
              <h4>{ detailedMedia.runTime ? detailedMedia.runTime : null }</h4>
              <div className="hd">HD</div>
              <BiMessageDetail className="subtitle-icon"/>
            </div>
            <div>
              <div className="rating">{ detailedMedia.maturityRating ? detailedMedia.maturityRating : null }</div>
              { detailedMedia.maturityRatingDescription ? detailedMedia.maturityRatingDescription : null }
            </div>
            <h3 className="row"><BsHandThumbsUpFill className="most-liked-icon"/>Most Liked</h3>
            <p>{detailedMedia.description}</p>
          </div>
          <div className="detailed-media__bonus-info">
            { organizedCrewMembers.cast && organizedCrewMembers.cast.length ? <DetailList title="Cast" contents={organizedCrewMembers.cast} /> : null }
            { organizedCategories.genres && organizedCategories.genres.length ? <DetailList title="Genre" contents={organizedCategories.genres} /> : null }
            { organizedCategories.vibes && organizedCategories.vibes.length ? <DetailList title="This movie is" contents={organizedCategories.vibes} /> : null }
          </div>
        </section>

        <SimilarMedia />

        <AboutMedia media={detailedMedia} organizedCrew={organizedCrewMembers} organizedCategories={organizedCategories}/>

      </div>
    </div>
  );
}

export default DetailedMedia;