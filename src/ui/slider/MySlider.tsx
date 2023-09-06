import React, { useRef } from 'react';
import { nftLeaders } from '../../data/leadersNFT';
import Card from '../card/Card';
import SlideButtons from '../slideButtons/SlideButtons';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from './MySlider.module.scss';

function SampleNextArrow(props:any) {
    const { style } = props;
    return <div style={{ ...style, display: "none"}}/>
}

function SamplePrevArrow(props:any) {
    const { style } = props;
    return <div style={{ ...style, display: "none"}}/>
}
  
const MySlider:React.FC = () => {

    const settings = {
        className: styles.slider,
        slidesToShow: 4,
        speed: 500,
        swipeToSlide: true,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>
    };
    
    const sliderRef = useRef<Slider | null>(null);

    const next = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    const previous = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };

  return (
    
    <>
        <Slider ref={sliderRef} {...settings}>
            {
                nftLeaders.map(prod=>(
                    <Card key={prod.floorPrice} product={prod} />
                ))
            }
        </Slider>
        <SlideButtons className={styles.bgSlideButtons} preHandler={previous} nextHandler={next}/>
    </>
  )
}

export default MySlider;