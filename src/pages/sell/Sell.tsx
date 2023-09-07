import { Switch } from 'antd';
import React, { useRef, useState } from 'react';
import Form from '../../ui/form/Form';
import styles from './Sell.module.scss';
import './Sell.css'
import Button from '../../ui/button/Button';
import { UploadOutlined } from '@ant-design/icons';

const Sell: React.FC = () => {

    const [photo, setPhoto] = useState<string|undefined>();

  return (
    <article className={styles.container}>
        <h2 className={styles.header}>Create Your NFT</h2>
        <div className={styles.mainContainer}>
            <div className={styles.inputContainer}>
                <Form header='Name' placeholder='ArtWork Name' />
                <Form isTextarea={true} header='Description' placeholder='Enter Your Description' />
                <div className={styles.metrics}>
                    <div className={styles.royalty}>
                        <Form header='Royalty' placeholder='Royalty' />
                    </div>
                    <div>
                        <Form header='Size' placeholder='Ex - 100 x 100' />
                    </div>
                </div>
                <Form header='Tags' placeholder='Beautiful Castle, Monkeys ETC' />
                <div className={styles.miniForm}>
                    <div className={styles.singleForm}>
                        <Form header='Price' placeholder='0.00007 ETC' />
                    </div>
                    <div>
                        <Form header='In Stock' placeholder='001' />
                    </div>
                </div>
                <div className={styles.switchPart}>
                    <p>Put On Sale<span>People Will Bids On Your NFT Project</span></p>
                    <Switch />
                </div>
                <div className={styles.switchPart}>
                    <p>Direct Sale<span>No Bids - Only Direct Salling</span></p>
                    <Switch />
                </div>
                <Button theme='black' name={<p className={styles.par}>Create</p>} className={styles.btn} />
            </div>
            <div className={styles.choosePhoto}>
                {
                    photo
                        ? <img src={photo} alt='select photo' className={styles.selectPhoto} />
                            : <div className={styles.uploadPhoto}>
                                <UploadOutlined style={{fontSize: '20pt'}} />
                                <p>PNG, GIF, WEBP, MP4 or MP3. Max 1Gb.</p>
                            </div>
                }
                <Button theme='black' name={<input type={'file'} className={styles.fileInpute}/>} className={styles.btn}/>
            </div>
        </div>
    </article>  
  )
}

export default Sell;