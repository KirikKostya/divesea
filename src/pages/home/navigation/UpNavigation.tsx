import React from 'react';
import Logo from '../../../ui/icons/Logo';
import Button from '../../../ui/button/Button';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from './UpNavigation.module.css';
import Search from '../../../ui/icons/Search';

const UpNavigation: React.FC = () => {

  const nav = useNavigate();
  return (
    <nav className={styles.navigation}>
        <Logo onClick={()=>nav('/')}/>
        <ul>
            <li><NavLink to='/DISCOVER' className={({isActive})=>isActive ? styles.active : styles.navLink}>DISCOVER</NavLink></li>
            <li><NavLink to='/CREATORS' className={({isActive})=>isActive ? styles.active : styles.navLink}>CREATORS</NavLink></li>
            <li><NavLink to='/SELL' className={({isActive})=>isActive ? styles.active : styles.navLink}>SELL</NavLink></li>
            <li><NavLink to='/STATS' className={({isActive})=>isActive ? styles.active : styles.navLink}>STATS</NavLink></li>
        </ul>
        <label className={styles.label}>
          <span><Search/></span>
          <input placeholder='Search Art Work / Creator'/>
        </label>
        <Button name='Connect Wallet' theme='black' />
    </nav> 
  )
}

export default UpNavigation;