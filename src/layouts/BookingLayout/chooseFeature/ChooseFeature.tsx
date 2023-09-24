import React from 'react';
import styles from './Feature.module.scss';
import classNames from 'classnames/bind';
import Booking from '../../../components/Booking_Form/Booking';
import ButtonBack from '../../../components/Button/BtnBack/ButtonBack';

const cx = classNames.bind(styles);

const ChooseFeature: React.FC = () => {
    return (
        <div className={cx('contentBannerHome')}>
            <div className={cx('boxService')}>
                <Booking />
            </div>
            <ButtonBack />
        </div>
    );
};

export default ChooseFeature;
