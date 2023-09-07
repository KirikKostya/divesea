import React from 'react';
import styles from './Form.module.scss';

interface IFormProps{
    header: string
    placeholder: string
    isTextarea?: boolean
} 
const Form:React.FC<IFormProps> = ({header, placeholder, isTextarea}) => {
  return (
    <label className={styles.form}>
        <h3 className={styles.header}>{header}</h3>
        {
            isTextarea
                ? <textarea className={`${styles.input} ${styles.textArea}`} placeholder={placeholder} />
                    : <input type="text" placeholder={placeholder} className={styles.input} />

        }
    </label>
  )
}

export default Form