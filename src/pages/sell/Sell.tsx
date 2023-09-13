import { Switch } from 'antd';
import React, { useRef, useState } from 'react';
import Form from '../../ui/form/Form';
import styles from './Sell.module.scss';
import './Sell.css'
import Button from '../../ui/button/Button';
import { UploadOutlined } from '@ant-design/icons';

const Sell: React.FC = () => {

    const [photo, setPhoto] = useState<string|undefined>();
    const [name, setName] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [royalty, setRoyalty] = useState<string>('');
    const [size, setSize] = useState<string>('');
    const [price, setPrice] = useState<string>('');
    const [tags, setTags] = useState<string>('');
    const [inStock, setInStock] = useState<string>(''); 
    const [sw1, setSw1] = useState<boolean>(false);
    const [sw2, setSw2] = useState<boolean>(false);

    const LOG = () => {
        console.log(photo,
            name,
            description,
            royalty,
            size,
            price,
            tags,
            inStock,
            sw1,
            sw2,);
            setPhoto('');
            setName('');
            setDescription('');
            setRoyalty('');
            setSize('');
            setPrice('');
            setTags('');
            setInStock('');
            setSw1(false);
            setSw2(false);
    }
  return (
    <article className={styles.container}>
        <h2 className={styles.header}>Create Your NFT</h2>
        <div className={styles.mainContainer}>
            <div className={styles.inputContainer}>
                <Form value={name} onChange={setName} header='Name' placeholder='ArtWork Name' />
                <Form value={description} onChange={setDescription} isTextarea={true} header='Description' placeholder='Enter Your Description' />
                <div className={styles.metrics}>
                    <div className={styles.royalty}>
                        <Form value={royalty} onChange={setRoyalty} header='Royalty' placeholder='Royalty' />
                    </div>
                    <div>
                        <Form value={size} onChange={setSize} header='Size' placeholder='Ex - 100 x 100' />
                    </div>
                </div>
                <Form value={tags} onChange={setTags} header='Tags' placeholder='Beautiful Castle, Monkeys ETC' />
                <div className={styles.miniForm}>
                    <div className={styles.singleForm}>
                        <Form value={price} onChange={setPrice} header='Price' placeholder='0.00007 ETC' />
                    </div>
                    <div>
                        <Form value={inStock} onChange={setInStock} header='In Stock' placeholder='001' />
                    </div>
                </div>
                <div className={styles.switchPart}>
                    <p>Put On Sale<span>People Will Bids On Your NFT Project</span></p>
                    <Switch onChange={(e)=>setSw1(e)} />
                </div>
                <div className={styles.switchPart}>
                    <p>Direct Sale<span>No Bids - Only Direct Salling</span></p>
                    <Switch onChange={(e)=>setSw2(e)} />
                </div>
                <Button onClick={LOG} theme='black' name={<p className={styles.par}>Create</p>} className={styles.btn} />
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
                <Button theme='black' name={<><p className={styles.btnUploud}>Upload</p><input type={'file'} accept="image/jpeg, image/png, image/jpg" onChange={(e:any)=>setPhoto(URL.createObjectURL(e.target.files[0]))} className={styles.fileInput}/></>} className={styles.btn}/>
            </div>
        </div>
    </article>  
  )
}

export default Sell;