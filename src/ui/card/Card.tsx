import React from 'react';
import Rhombus from '../icons/Rhombus';
import { ILeadersNft } from '../../data/leadersNFT';
import Button from '../button/Button';
import styles from './Card.module.scss';

interface ICard{
    product: ILeadersNft
}
const Card: React.FC<ICard> = ({product}) => {
  return (
    <div className={styles.card}>
        <img src={product.photo} alt='photo' className={styles.image} />
        <header className={styles.header}>{product.collection}</header>
        <article>
            <p>
                Current bid
                <span> <Rhombus />{product.floorPrice}</span>
            </p>
            <Button name='Place Bid' theme='black'/>
        </article>
    </div>
  )
}

export default React.memo(Card);