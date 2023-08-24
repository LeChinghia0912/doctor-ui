import React from 'react';
import styles from './Hospital.module.scss';
import classNames from 'classnames/bind';
import Slider from 'react-slick';
import { HospitalData } from './DeployData';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

interface MultipleHospitalProps {
    data: HospitalData[];
}

const MultipleHospital: React.FC<MultipleHospitalProps> = ({ data }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className={cx('styles_slider')}>
            <Slider {...settings}>
                {data.map((hospital, index) => (
                    <div className={cx('slider_card')} key={index}>
                        <Link to={''}>
                            <div className={cx('item')}>
                                <div className={cx('styles_card')}>
                                    <div className={cx('wrap')}>
                                        <div className={cx('image')}>
                                            <img src={hospital.image} alt="" />
                                        </div>
                                        <div className={cx('name')}>{hospital.name}</div>
                                        <div className={cx('address')}>{hospital.address}</div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default MultipleHospital;
