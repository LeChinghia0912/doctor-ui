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
        centerPadding: '60px',
        slidesToShow: 4,
        swipeToSlide: true,
        afterChange: function (index: number) {
            console.log(`${index + 1}`);
        },
    };

    return (
        <>
            <Slider {...settings} centerMode ref={sliderRef}>
                {slickItems.map((item, index) => (
                    <SlickItemComponent key={index} item={item} />
                ))}
            </Slider>
        </>
    );
};

export default SwipeToSlide;
