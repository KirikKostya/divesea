import React from 'react';
import Rhombus from '../icons/Rhombus';
import styles from './Card.module.css';
import { ILeadersNft } from '../../data/leadersNFT';

interface ICard{
    product: ILeadersNft
}
const Card: React.FC<ICard> = ({product}) => {
  return (
    <div className={styles.card}>
        <img src={product.photo} alt='photo' className={styles.image} />
        <header>{product.collection}</header>
        <article>
            <p>
                Current bid
                <span> <Rhombus />{product.floorPrice}</span>
            </p>
            <button>
                Place Bid
            </button>
        </article>
    </div>
  )
}

export default React.memo(Card);