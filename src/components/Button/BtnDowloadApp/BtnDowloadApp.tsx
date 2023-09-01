import React from 'react';
import styles from './style.module.scss';
import classNames from 'classnames/bind';
import icon from '../../../assets/Icons';

const cx = classNames.bind(styles);

const BtnDowloadApp = () => {
    return (
        <div className={cx('dowloadApp')}>
            <div className={cx('title')}>Tải app để đặt lịch nhanh chóng</div>
            <div className={cx('buttonWrapper')}>
                <div className={cx('ios')}>
                    <img src={icon.ios.default} alt="" />
                </div>
                <div className={cx('android')}>
                    <img src={icon.android.default} alt="" />
                </div>
            </div>
        </div>
    );
};

export default BtnDowloadApp;
