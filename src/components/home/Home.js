import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

import Nav from "./Nav";
import Featured from "./Featured";
import Slider from "./Slider";
import DetailedMedia from "../media/DetailedMedia";


const Home = () => {

  const { mediaByCategory, detailedMediaToggle } = useOutletContext();

  useEffect(() => {
  }, [detailedMediaToggle])

  return (
    <div>

      <div className={ detailedMediaToggle ? "home noscroll" : "home" }>
        <Nav />
        <Featured />
        {
          mediaByCategory.length ? mediaByCategory.map((category, index) => {
            return <Slider category={category.name} categorysMedia={category.media} key={index} />
          }) : <div>Fetching...</div>
        }
      </div>
      {
        detailedMediaToggle ? <DetailedMedia /> : null
      }

    </div>
  );
}

export default Home;