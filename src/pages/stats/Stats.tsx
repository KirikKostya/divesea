import React from 'react';
import { nftLeaders } from '../../data/DATA';
import ButtonList from '../../ui/buttonList/ButtonList';
import CategoryIcon from '../../ui/icons/CategoryIcon';
import CollectionIcon from '../../ui/icons/CollectionIcon';
import PriceIcon from '../../ui/icons/PriceIcon';
import LongLinearCard from '../home/topCollection/longLinearCard/LongLinearCard';
import styles from './Stats.module.scss';

const Stats:React.FC = () => {

    const statsBtns = [
        {
            id: 1,
            value: <><CategoryIcon/> Category</>
        },
        {
            id: 2,
            value: <><CollectionIcon /> Collection</>
        },
        {
            id: 3,
            value: <><PriceIcon /> Price</>
        },
    ]
  return (
    <div className={styles.container}>
        <header>Leaderboard NFTs</header>
        <ButtonList btns={statsBtns} />
        <div className={styles.list}>
            <LongLinearCard />
            {
                nftLeaders.map(prod=>(
                    <LongLinearCard key={prod.id} product={prod}/>
                ))
            }
        </div>
    </div>
  )
}

export default Stats;