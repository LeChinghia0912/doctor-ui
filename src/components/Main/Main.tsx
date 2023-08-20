import React from 'react';
import classNames from 'classnames/bind';
import styles from './Main.module.scss';
import backgroundImage from '../../assets/images/bg_new.png';
import WrapperHeader from '../BannerHeader/WrapperHeader';

const cx = classNames.bind(styles);
const Main: React.FC = () => {
    const imgBanner = {
        backgroundImage: `url(${backgroundImage})`,
    };
    return (
        <div className={cx('main')}>
            <div className={cx('header')}>
                <div style={imgBanner} className={cx('bannerHeader')}>
                    <div className={cx('container')}>
                        <div className={cx('content')}>
                            <WrapperHeader />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
