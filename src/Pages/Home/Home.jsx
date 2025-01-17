import React from 'react';
import Banner from './Banner';
import SectionHeading from '../../Components/common/SectionHeading';
import FeaturesFoods from '../../Components/FeaturesFoods';
import HomeMenuSec from '../../Components/Home/HomeMenuSec';
import Hero from './Hero';
import Featured from './Featured';
import Testimonials from './Testimonials';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      {/* ------------- */}
      <SectionHeading heading="Online Order" subheading="From 11:00 am to 10:00 pm"></SectionHeading>
      {/* ------------- */}
      <FeaturesFoods></FeaturesFoods>
      {/* ------------- */}
      <Hero />
      {/* ------------- */}
      <SectionHeading heading="From Our Menu" subheading="Check it Out"></SectionHeading>
      {/* ------------- */}
      <HomeMenuSec />
      {/* ------------- */}
      <SectionHeading heading="Our Recommends" subheading="Should Try"></SectionHeading>
      {/* ------------- */}
      <Featured></Featured>
      {/* ------------- */}
      <Testimonials />

    </div>
  );
};

export default Home;