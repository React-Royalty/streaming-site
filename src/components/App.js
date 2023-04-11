import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { fetchMedia } from '../api/media';
import { meFetch } from '../api/users';

import '../css/style.css'

function App() {

  const [ loggedIn, setLoggedIn ] = useState(false);
  const [ userData, setUserData ] = useState({});
  const [ media, setMedia ] = useState([]);


  useEffect(() => {
    getMedia();
    checkForUser();
  }, [])


  async function getMedia() {
    const mediaFetchData = await fetchMedia();

    if ( mediaFetchData.success ) {
      setMedia(mediaFetchData.allMedia);
      console.log("media!", media);
    } else {
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

      <Outlet context={{ loggedIn, setLoggedIn, userData, setUserData, media, setMedia }} />

    </div>
  )
}

export default App