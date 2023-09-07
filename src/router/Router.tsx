import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UpNavigation from '../ui/navigation/UpNavigation';
import Home from '../pages/home/Home';
import Footer from '../ui/footer/Footer';
import Discover from '../pages/discover/Discover';
import CardDetails from '../pages/cardDatails/CardDetails';
import Creators from '../pages/creators/Creators';
import Stats from '../pages/stats/Stats';
import Sell from '../pages/sell/Sell';

const Router:React.FC = () => {

  return (
    <BrowserRouter>
      <UpNavigation />
      <Routes>
          <Route path='*' element={<h2>Not found !</h2>} />
          <Route path='/' element={<Home />} />
          <Route path='/DISCOVER' element={<Discover />} />
          <Route path='/DISCOVER/:id' element={<CardDetails />} />
          <Route path='/CREATORS' element={<Creators />} />
          <Route path='/Sell' element={<Sell />} />
          <Route path='/STATS' element={<Stats />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default Router;