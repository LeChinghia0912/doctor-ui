import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ButtonHeader.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faMobile, faUser } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const ButtonHeader = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    const renderUserInfo = () => (
        <div className={cx('text')}>
            <div className={cx('icon')}>
                <FontAwesomeIcon icon={faUser} />
            </div>
            <span>{isLoggedIn ? 'Lê Chí Nghĩa' : 'Đăng nhập'}</span>
        </div>
    );

    return (
        <div className={cx('buttonWrapper')}>
            <div className={cx('notification')}>
                <span className={cx('badge')}>
                    <span className={cx('icon')}>
                        <FontAwesomeIcon icon={faBell} />
                    </span>
                </span>
            </div>

            <div className={cx('dowload')}>
                <button className={cx('btnDowload')}>
                    <FontAwesomeIcon icon={faMobile} />
                    <span style={{ fontWeight: '700' }}>Tải ứng dụng</span>
                </button>
            </div>

            <div className={cx('info')}>
                <button className={cx('btnInfo')} onClick={isLoggedIn ? handleLogout : handleLogin}>
                    {renderUserInfo()}
                </button>
            </div>
        </div>
    );
};

export default ButtonHeader;
