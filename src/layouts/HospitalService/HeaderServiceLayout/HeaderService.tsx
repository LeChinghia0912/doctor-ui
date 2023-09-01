import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import backgroundImage from '../../../assets/images/BannerService.png';
import Title from '../../../components/Dich_Vu/co_so_kham/Title';

const cx = classNames.bind(styles);
const HeaderService: React.FC = () => {
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

export default HeaderService;
