import React from 'react';
import styles from './Button.module.css';

interface IButton{
  name: React.ReactNode
  theme: string
  className?:string
}
const Button: React.FC<IButton> = ({name, theme, className}) => {
  return (
    <button className={`${theme==='black' ? styles.blackButton : styles.whiteButton} ${className}`}>{name}</button>
  )
}

export default React.memo(Button);