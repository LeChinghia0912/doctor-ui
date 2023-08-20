import React from 'react';
import classNames from 'classnames/bind';
import styles from './ButtonHeader.module.scss';

const cx = classNames.bind(styles);

const BtnNow: React.FC = () => {
    return (
        <div className={cx('buttonWrapper')}>
            <div className={cx('dowload')}>
                <button className={cx('btnDowload')}>
                    <span style={{ fontWeight: '600' }}>Đặt khám ngay</span>
                </button>
            </div>
        </div>
    );
};

export default BtnNow;
