import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

import Nav from "./Nav";
import Featured from "./Featured";
import Slider from "./Slider";
import LoadingSlider from "./LoadingSlider";
import Popup from "../media/popup/Popup";


const Home = () => {

  const { mediaByCategory, detailedMediaToggle } = useOutletContext();

  useEffect(() => {
  }, [detailedMediaToggle])

  return (
    <div>

      <div className={ detailedMediaToggle ? "noscroll" : "home" }>
        <Nav />
        <Featured />
        {
          mediaByCategory.length ? mediaByCategory.map((category, index) => {
            return <Slider category={category.name} categorysMedia={category.media} key={index} />
          }) : <LoadingSlider />
        }
      </div>
      {
        detailedMediaToggle ? <Popup /> : null
      }

    </div>
  );
}

export default Home;