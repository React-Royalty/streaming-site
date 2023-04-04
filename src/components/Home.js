import React from 'react';
import { useOutletContext } from 'react-router-dom';

import Nav from './Nav';
import Featured from './Featured';
import Slider from './Slider';


const Home = () => {

  const { mediaByCategory } = useOutletContext();


  return (
    <div className="home">

      <Nav />
      <Featured />
      {
        mediaByCategory.length ? mediaByCategory.map((category, index) => {
          return <Slider category={category.name} media={category.media} key={index} />
        }) : <div>Fetching...</div>
      }

    </div>
  );
}

export default Home;