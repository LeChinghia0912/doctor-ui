import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { slickItems } from './swipeToSlideData';
import SlickItemComponent from './SlickItem';

const SwipeToSlide: React.FC = () => {
    const sliderRef = useRef<Slider>(null);

    const settings = {
        className: 'center',
        infinite: true,
        slidesToShow: 6,
        swipeToSlide: true,
    };

    return (
        <Slider {...settings} ref={sliderRef}>
            {slickItems.map((item, index) => (
                <SlickItemComponent key={index} item={item} />
            ))}
        </Slider>
    );
};

export default SwipeToSlide;
