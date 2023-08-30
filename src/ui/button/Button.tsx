import React from 'react';
import styles from './Button.module.css';

interface IButton{
  name: string
  theme: string
}
const Button: React.FC<IButton> = ({name, theme}) => {
  return (
    <button className={theme==='black' ? styles.blackButton : styles.whiteButton}>{name}</button>
  )
}

export default React.memo(Button);