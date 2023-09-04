import React, { useMemo, useState } from 'react';
import Button from '../../../ui/button/Button';
import CategoryIcon from '../../../ui/icons/CategoryIcon';
import CollectionIcon from '../../../ui/icons/CollectionIcon';
import PriceIcon from '../../../ui/icons/PriceIcon';
import styles from './ExploreMarketplace.module.css';
import { ILeadersNft, nftLeaders } from '../../../data/leadersNFT';
import Card from '../../../ui/card/Card';
import ToggleButtons from '../../../ui/toggleButtons/ToggleButtons';
import { IFunc } from '../topCollection/TopCollection';

const ExploreMarketplace:React.FC = () => {

    const [filter, setFilter] = useState<IFunc>({func: (el:ILeadersNft[])=>el});
    
    let filterArray = useMemo(()=>filter.func(nftLeaders), [filter.func])

  return (
    <article className={styles.container}>
        <h1>Explore Marketplace</h1>
        <div className={styles.buttons}>
            <Button className={styles.margin} name='All' theme='white'/>
            <Button className={styles.margin} name={<p className={styles.button}><CategoryIcon/> Category</p>} theme='white'/>
            <Button className={styles.margin} name={<p className={styles.button}><CollectionIcon /> Collection</p>} theme='white'/>
            <Button className={styles.margin} name={<p className={styles.button}><PriceIcon/> Price</p>} theme='white'/>
        </div>
        <div className={styles.cardContainer}>
            {
                filterArray.map(prod=>(
                    <Card key={prod.collection} product={prod} />
                ))
            }
        </div>
        <ToggleButtons filterArray={filterArray} setFilter={setFilter}/>
    </article>
  )
}

export default ExploreMarketplace;