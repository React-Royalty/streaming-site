import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

import Nav from "./Nav";
import Featured from "./Featured";
import Slider from "./Slider";
import LoadingSlider from "./LoadingSlider";
import Popup from "../media/popup/Popup";
import NumberedSlider from "./NumberedSlider";


const Home = () => {

  const { homepageCategories, specialHomepageCategories, detailedMediaToggle } = useOutletContext();

  const [ trendingNowCategory, setTrendingNowCategory ] = useState({});
  const [ topTenMoviesCategory, setTopTenMoviesCategory ] = useState({});
  const [ topTenTVShowsCategory, setTopTenTVShowsCategory ] = useState({});


   // TODO: FIX SPECIAL CATEGORIES NOT SHOWING UP UNTIL SAVED FILE


  useEffect(() => {
    // console.log("specials", specialHomepageCategories);
    const trending = specialHomepageCategories.filter(category => category.name === "Trending Now");
    setTrendingNowCategory(trending[0]);  // TODO: HELLLOOOOO WHERE IS THIS
    // console.log("trending now !", trending[0]);

    const topMovies = specialHomepageCategories.filter(category => category.name === "Top 10 Movies in the U.S. Today");
    setTopTenMoviesCategory(topMovies[0]);

    const topShows = specialHomepageCategories.filter(category => category.name === "Top 10 TV Shows in the U.S. Today");
    setTopTenTVShowsCategory(topShows[0]);
  }, [])


  useEffect(() => {
  }, [detailedMediaToggle])


  return (
    <div>

      <div className={ detailedMediaToggle ? "noscroll" : "home" }>
        <Nav />
        <Featured />
        {
          trendingNowCategory && trendingNowCategory.media ? <Slider category={trendingNowCategory.name} categorysMedia={trendingNowCategory.media} /> : null
        }
        {
          homepageCategories.length ? homepageCategories.map((category, index) => {
            return <Slider category={category.name} categorysMedia={category.media} key={index} />
          }) : <LoadingSlider />
        }
        {
          topTenMoviesCategory && topTenMoviesCategory.media ? <NumberedSlider category={topTenMoviesCategory.name} categorysMedia={topTenMoviesCategory.media} /> : null
        }
        {
          topTenTVShowsCategory && topTenTVShowsCategory.media ? <NumberedSlider category={topTenTVShowsCategory.name} categorysMedia={topTenTVShowsCategory.media} /> : null
        }
      </div>
      {
        detailedMediaToggle ? <Popup /> : null
      }

    </div>
  );
}

export default Home;