import React from 'react';
import styles from './Form.module.scss';

interface IFormProps{
    header: string
    placeholder: string
    isTextarea?: boolean
    onChange: React.Dispatch<React.SetStateAction<string>>
    value: string
} 
const Form:React.FC<IFormProps> = ({header, placeholder, isTextarea, onChange, value}) => {
  return (
    <label className={styles.form}>
        <h3 className={styles.header}>{header}</h3>
        {
            isTextarea
                ? <textarea value={value} onChange={(e:any)=>onChange(e.target.value)} className={`${styles.input} ${styles.textArea}`} placeholder={placeholder} />
                    : <input value={value} onChange={(e:any)=>onChange(e.target.value)} type="text" placeholder={placeholder} className={styles.input} />

        }
    </label>
  )
}

export default Form