import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import UpNavigation from '../pages/home/navigation/UpNavigation';
import Home from '../pages/home/Home';

const Router:React.FC = () => {

  return (
    <BrowserRouter>
        <UpNavigation />
        <Routes>
            <Route path='*' element={<h2>Not found !</h2>} />
            <Route path='/' element={<Home />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router;