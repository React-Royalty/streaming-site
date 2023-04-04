import React from "react";
import { useOutletContext } from "react-router-dom";

import Nav from "./Nav";
import Featured from "./Featured";
import Slider from "./Slider";
import DetailedMedia from "../media/DetailedMedia";


const Home = () => {

  const { mediaByCategory, detailedMediaToggle } = useOutletContext();
  console.log("detailed media toggle", detailedMediaToggle);


  return (
    <div className="home">

      <Nav />
      <Featured />
      {
        mediaByCategory.length ? mediaByCategory.map((category, index) => {
          return <Slider category={category.name} categorysMedia={category.media} key={index} />
        }) : <div>Fetching...</div>
      }
      {
        detailedMediaToggle ? <DetailedMedia /> : null
      }

    </div>
  );
}

export default Home;