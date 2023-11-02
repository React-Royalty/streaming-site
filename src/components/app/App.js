import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { fetchCategories, fetchHomepageCategories } from '../../api/categories';
import { fetchMedia, fetchMediaByTitle } from '../../api/media';
import { meFetch } from '../../api/users';

import "../../css/style.css";
import "../../css/madi.css";

function App() {

  const [ loggedIn, setLoggedIn ] = useState(false);
  const [ userData, setUserData ] = useState({});

  const [ media, setMedia ] = useState([]);
  const [ featuredMedia, setFeaturedMedia ] = useState({});
  const [ homepageCategories, setHomepageCategories ] = useState([]);
  const [ specialHomepageCategories, setSpecialHomepageCategories ] = useState([]);

  const [ detailedMediaTitle, setDetailedMediaTitle ] = useState({});
  const [ detailedMediaToggle, setDetailedMediaToggle ] = useState(false);

  const [ searchTerm, setSearchTerm ] = useState("");
  const [ searchResultsMedia, setSearchResultsMedia ] = useState([]);
  const [ matchingTerms, setMatchingTerms ] = useState([]);


  useEffect(() => {
    getMedia();
    checkForUser();
  }, [])

  console.log('testing, ', userData.username)


  async function getMedia() {
    const homepageCategoriesFetchData = await fetchHomepageCategories();
    const mediaFetchData = await fetchMedia();
    const featuredMediaFetchData = await fetchMediaByTitle("Spider-Man: Into the Spider-Verse");

    if ( homepageCategoriesFetchData.success && mediaFetchData.success && featuredMediaFetchData.success ) {
      setMedia(mediaFetchData.allMedia);
      // console.log("media!", mediaFetchData.media);
      setHomepageCategories(homepageCategoriesFetchData.categories.homepage);
      setSpecialHomepageCategories(homepageCategoriesFetchData.categories.special);
      // console.log("categories!", categoriesFetchData.categories);
      
      setFeaturedMedia(featuredMediaFetchData.media);
      console.log("featured!", featuredMedia);

    } else {
      console.log( homepageCategoriesFetchData.message );
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

      <Outlet context={{ loggedIn, setLoggedIn, userData, setUserData, featuredMedia, setFeaturedMedia, media, setMedia, homepageCategories, setHomepageCategories, specialHomepageCategories, setSpecialHomepageCategories, detailedMediaTitle, setDetailedMediaTitle, detailedMediaToggle, setDetailedMediaToggle, searchTerm, setSearchTerm, searchResultsMedia, setSearchResultsMedia, matchingTerms, setMatchingTerms }} />

    </div>
  )
}

export default App