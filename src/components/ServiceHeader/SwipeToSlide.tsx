import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Slider.module.scss';
import classNames from 'classnames/bind';
import { slickItems, SlickItem } from './swipeToSlideData';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const SwipeToSlide: React.FC = () => {
    const sliderRef = useRef<Slider>(null);

    const settings = {
        className: 'center',
        infinite: true,
        centerPadding: '60px',
        slidesToShow: 5,
        swipeToSlide: true,
        afterChange: function (index: number) {
            console.log(`Slider Changed to: ${index + 1}, background: #222; color: #bada55`);
        },
    };

    return (
        <>
            <Slider {...settings} ref={sliderRef}>
                {slickItems.map((item: SlickItem, index: number) => (
                    <div style={{ width: '100%', display: 'inline-block' }} className="item" key={index}>
                        <div className={cx('card')}>
                            <Link style={{ textDecoration: 'none' }} to={item.link}>
                                <span className={cx('icon')} style={{ backgroundImage: `url(${item.icon})` }}></span>
                                <div className={cx('title')}>{item.title}</div>
                            </Link>
                        </div>
                    </div>
                ))}
            </Slider>
        </>
    );
};

export default SwipeToSlide;
