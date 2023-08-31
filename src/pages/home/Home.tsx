import React from 'react';
import Preview from './preview/Preview';
import WeeklyTop from './weeklyTop/WeeklyTop';

const Home:React.FC = () => {
  return (
    <>
      <Preview />
      <WeeklyTop />
    </>
  )
}

export default Home;