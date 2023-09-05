import React from 'react';
import Preview from './preview/Preview';
import WeeklyTop from './weeklyTop/WeeklyTop';
import TopCollection from './topCollection/TopCollection';
import ExploreMarketplace from './exploreMarketplace/ExploreMarketplace';
import JustUnleash from './justUnleash-article/JustUnleash';
import CreateSell from './create&Sell/CreateSell';
import Footer from './footer/Footer';

const Home:React.FC = () => {
  return (
    <>
      <Preview />
      <WeeklyTop />
      <TopCollection />
      <ExploreMarketplace />
      <JustUnleash />
      <CreateSell />
      <Footer />
    </>
  )
}

export default Home;