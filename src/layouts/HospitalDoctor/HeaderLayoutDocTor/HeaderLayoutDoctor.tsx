import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import backgroundImage from '../../../assets/images/BannerService.png';
import Title from '../../../components/Dich_Vu/bac_si/Title';

const cx = classNames.bind(styles);
const HeaderLayoutDoctor: React.FC = () => {
    const bannerService: React.CSSProperties = {
        backgroundImage: `url(${backgroundImage})`,
    };

    return (
        <div className={cx('BannerWrapper')} style={bannerService}>
            <div className={cx('Container')}>
                <Title />
            </div>
        </div>
    );
};

export default HeaderLayoutDoctor;
