import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { fetchCategories } from '../../api/categories';
import { fetchMedia } from '../../api/media';
import { meFetch } from '../../api/users';

import "../../css/style.css";
import "../../css/madi.css";

function App() {

  const [ loggedIn, setLoggedIn ] = useState(false);
  const [ userData, setUserData ] = useState({});
  const [ media, setMedia ] = useState([]);
  const [ mediaByCategory, setMediaByCategory ] = useState([]);
  const [ detailedMedia, setDetailedMedia ] = useState({});
  const [ detailedMediaToggle, setDetailedMediaToggle ] = useState(false);



  useEffect(() => {
    getMedia();
    checkForUser();
  }, [])


  async function getMedia() {
    const categoriesFetchData = await fetchCategories();
    const mediaFetchData = await fetchMedia();

    if ( categoriesFetchData.success && mediaFetchData.success ) {
      setMedia(mediaFetchData.allMedia);
      console.log("media!", media);
      setMediaByCategory(categoriesFetchData.categories);
      console.log("categories!", mediaByCategory);
    } else {
      console.log( categoriesFetchData.message );
      console.log( mediaFetchData.message );

    }
  }


  async function checkForUser() {
    const meFetchData = await meFetch();

    if ( meFetchData.success ) {
      // console.log("welcome " + meFetchData.user.username);
      setLoggedIn(true);
      setUserData(meFetchData.user);
    } else {
      // console.log(meFetchData.message);
    }
  }


  return (
    <div>

      <Outlet context={{ loggedIn, setLoggedIn, userData, setUserData, media, setMedia, mediaByCategory, setMediaByCategory, detailedMedia, setDetailedMedia, detailedMediaToggle, setDetailedMediaToggle }} />

    </div>
  )
}

export default App