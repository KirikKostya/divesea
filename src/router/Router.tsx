import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UpNavigation from '../ui/navigation/UpNavigation';
import Home from '../pages/home/Home';
import Footer from '../ui/footer/Footer';
import Discover from '../pages/discover/Discover';
import CardDetails from '../pages/cardDatails/CardDetails';

const Router:React.FC = () => {

  return (
    <BrowserRouter>
      <UpNavigation />
      <Routes>
          <Route path='*' element={<h2>Not found !</h2>} />
          <Route path='/' element={<Home />} />
          <Route path='/DISCOVER' element={<Discover />} />
          <Route path='/DISCOVER/:id' element={<CardDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default Router;