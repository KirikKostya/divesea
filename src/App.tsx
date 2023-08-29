import React from 'react';
import Rhombus from './ui/icons/Rhombus';
import Card from './ui/card/Card';
import { nftLeaders } from './data/leadersNFT';

const App: React.FC = () => {
  return (
    <div style={{display:'flex', alignItems: 'center', flexWrap: 'wrap'}}>
      {
        nftLeaders.map(prod=>(
          <Card product={prod} />
        ))
      }
    </div>
  )
}

export default App;
