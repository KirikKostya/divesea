import React from 'react';
import Rhombus from './ui/icons/Rhombus';
import Card from './ui/card/Card';
import { nftLeaders } from './data/leadersNFT';
import Router from './router/Router';

const App: React.FC = () => {
  return (
    <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'start'}}>
      <Router />
    </div>
  )
}

export default App;
