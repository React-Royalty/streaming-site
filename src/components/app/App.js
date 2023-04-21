import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { fetchCategories } from '../../api/categories';
import { fetchMedia, fetchMediaByTitle } from '../../api/media';
import { meFetch } from '../../api/users';

import "../../css/style.css";
import "../../css/madi.css";

function App() {

  const [ loggedIn, setLoggedIn ] = useState(false);
  const [ userData, setUserData ] = useState({});
  const [ featuredMedia, setFeaturedMedia ] = useState({});
  const [ media, setMedia ] = useState([]);
  const [ mediaByCategory, setMediaByCategory ] = useState([]);
  const [ detailedMediaTitle, setDetailedMediaTitle ] = useState({});
  const [ detailedMediaToggle, setDetailedMediaToggle ] = useState(false);



  useEffect(() => {
    getMedia();
    checkForUser();
  }, [])


  async function getMedia() {
    const categoriesFetchData = await fetchCategories();
    const mediaFetchData = await fetchMedia();
    const featuredMediaFetchData = await fetchMediaByTitle("Spider-Man: Into the Spider-Verse");

    if ( categoriesFetchData.success && mediaFetchData.success && featuredMediaFetchData.success ) {
      setMedia(mediaFetchData.allMedia);
      // console.log("media!", mediaFetchData.media);
      setMediaByCategory(categoriesFetchData.categories);
      // console.log("categories!", categoriesFetchData.categories);
      
      setFeaturedMedia(featuredMediaFetchData.media);
      console.log("featured!", featuredMedia);

    } else {
      console.log( categoriesFetchData.message );
      console.log( mediaFetchData.message );
      console.log( featuredMedia.message );

    }
  }


  async function checkForUser() {
    const meFetchData = await meFetch();

    if ( meFetchData.success ) {
      console.log("welcome, " + meFetchData.user.username);
      setLoggedIn(true);
      setUserData(meFetchData.user);
    } else {
      // console.log(meFetchData.message);
    }
  }


  return (
    <div>

      <Outlet context={{ loggedIn, setLoggedIn, userData, setUserData, featuredMedia, setFeaturedMedia, media, setMedia, mediaByCategory, setMediaByCategory, detailedMediaTitle, setDetailedMediaTitle, detailedMediaToggle, setDetailedMediaToggle }} />

    </div>
  )
}

export default App