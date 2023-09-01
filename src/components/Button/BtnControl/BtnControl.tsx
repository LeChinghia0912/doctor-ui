import React from 'react';
import styles from './style.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const BtnControl: React.FC = () => {
    return (
        <>
            <div className={cx('btnControl')}>
                <Link to={''}>
                    <button className={cx('btnBooking')}>
                        <span>Đặt khám ngay</span>
                    </button>
                </Link>
            </div>
        </>
    );
};

export default BtnControl;
