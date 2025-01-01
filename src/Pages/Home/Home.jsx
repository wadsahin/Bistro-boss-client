import React from 'react';
import Banner from './Banner';
import SectionHeading from '../../Components/common/SectionHeading';
import FeaturesFoods from '../../Components/FeaturesFoods';
import HomeMenuSec from '../../Components/Home/HomeMenuSec';
import Hero from './Hero';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      {/* ------------- */}
      <SectionHeading heading="Online Order" subheading="From 11:00 am to 10:00 pm"></SectionHeading>
      {/* ------------- */}
      <FeaturesFoods></FeaturesFoods>
      {/* ------------- */}
      <Hero />
      {/* ------------- */}
      <HomeMenuSec />

    </div>
  );  
};

export default Home;