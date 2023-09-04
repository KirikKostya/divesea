import React from 'react';
import Preview from './preview/Preview';
import WeeklyTop from './weeklyTop/WeeklyTop';
import TopCollection from './topCollection/TopCollection';
import ExploreMarketplace from './exploreMarketplace/ExploreMarketplace';

const Home:React.FC = () => {
  return (
    <>
      <Preview />
      <WeeklyTop />
      <TopCollection />
      <ExploreMarketplace />
    </>
  )
}

export default Home;