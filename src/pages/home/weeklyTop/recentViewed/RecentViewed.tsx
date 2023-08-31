import React from 'react';
import styles from './RecentViewed.module.css';
import { nftLeaders } from '../../../../data/leadersNFT';
import LinearCard from '../linearCard/LinearCard';

const RecentViewed:React.FC = () => {
  return (
    <article className={styles.article}>
        <h1>Recent Viewed</h1>
        {
            nftLeaders.slice(0,2).map(prod=>(
                <LinearCard key={prod.collection} product={prod} />
            ))
        }
    </article>
  )
}

export default RecentViewed;

