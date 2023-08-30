import React, {useState} from 'react';
import Button from '../../../ui/button/Button';
import styles from './Preview.module.css';
import { photosList } from '../../../data/leadersNFT';
import { ArrowRightOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import Arrow from '../../../ui/icons/Arrow';
import Dots from '../../../ui/icons/Dots';

const Preview: React.FC = () => {

  const [activePhoto, setActivePhoto] = useState<number>(1); 
  const [active, setActive] = useState<number>(1);

  const prePhoto = ()=>{
    setActivePhoto((prevIndex) => (prevIndex === 0 ? photosList.length - 1 : prevIndex - 1));
    setActive(activePhoto)
  }
  const nextPhoto = ()=>{
    setActivePhoto((prevIndex) => (prevIndex === photosList.length - 1 ? 0 : prevIndex + 1))
    setActive((prevIndex) => (prevIndex === photosList.length - 1 ? 0 : prevIndex + 1))
  }
  return (
    <article className={styles.previewContainer}>
      <div className={styles.info}>
          <hr className={styles.hr}/>
          <h1>Discover And<br/> Create NFTs</h1>
          <p>Discover, Create and Sell NFTs On Our NFT Marketplace<br/> With Over Thousands Of NFTs And Get a <span>$20 bonus</span>.</p>
          <div className={styles.buttons}>
              <Button name='EXPLORE MORE' theme='black' />
              <Button name='CREATE NFT' theme='white' />
          </div>
          <ul>
              <li><span>430K+</span>Art Works</li>
              <li><span>159K+</span>Creators</li>
              <li><span>87K+</span>Collection</li>
          </ul>
      </div>
      <div className={styles.photosSlider}>
        <img className={`${styles.mainImage} ${activePhoto === 1 ? styles.active : ''}`} src={require(`../../../ui/photo/Picture${activePhoto}.png`)} alt="mainPhoto" />
        <Arrow className={styles.arrow}/>
        <img className={`${styles.preImage} ${activePhoto === 1 ? styles.active : ''}`} src={require(`../../../ui/photo/Picture${activePhoto === 0 ? photosList.length - 1 : activePhoto - 1}.png`)} alt="prePhoto" />
        <Dots className={styles.dots}/>
        <div className={styles.changeBTNS}>
          <button onClick={nextPhoto}><ArrowLeftOutlined style={{color: '#929292'}} /></button>
          <hr className={styles.btnBreak}/>
          <button onClick={prePhoto}><ArrowRightOutlined style={{color: '#23262F'}}/></button>
        </div>
      </div>
      <p onClick={()=>console.log(activePhoto)}>qwe</p>
    </article>
  )
}

export default Preview;