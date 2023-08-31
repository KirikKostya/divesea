import React from 'react';
import MySlider from '../../../ui/slider/MySlider';
import styles from './WeeklyTop.module.css';
import RecentViewed from './recentViewed/RecentViewed';

const WeeklyTop: React.FC = () => {

  return (
    <article className={styles.weeklyContainer}>
        <h1 className={styles.header}>Weekly - Top NFT</h1>
        <MySlider />
        <RecentViewed />
    </article>
  )
}

export default WeeklyTop;
