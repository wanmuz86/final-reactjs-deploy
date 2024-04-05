import React from 'react'
import './Home.css';
import Banner from '../../components/Banner/Banner';

const Home = ({image, title}) => {
  const subtitle = "Shop until you drop";

  return (
    <div>
      <Banner image={image} title={title} subtitle={subtitle}/>
    </div>
  )
}

export default Home