import React, { useMemo, useState } from 'react';
import styles from './TopCollection.module.css';
import { ILeadersNft, nftLeaders } from '../../../data/leadersNFT';
import LongLinearCard from './longLinearCard/LongLinearCard';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import ToggleButtons from '../../../ui/toggleButtons/ToggleButtons';

export interface IFunc{
    func: (el: ILeadersNft[]) => ILeadersNft[]
}
const TopCollection:React.FC = () => {
    
    const [filter, setFilter] = useState<IFunc>({func: (el:ILeadersNft[])=>el.slice(0, 4)});
    
    let filterArray = useMemo(()=>filter.func(nftLeaders), [filter.func])

  return (
    <div className={styles.container}>
        <h1>Top Collection</h1>
        <div style={{width: '90%'}}>
            <LongLinearCard />
            {
                filterArray.map(prod=>(
                    <LongLinearCard key={prod.collection} product={prod} />
                ))
            }
        </div>
        <ToggleButtons filterArray={filterArray} setFilter={setFilter} />
    </div>
  )
}

export default TopCollection;