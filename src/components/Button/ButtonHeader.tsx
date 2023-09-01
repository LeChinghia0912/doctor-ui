import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ButtonHeader.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faMobileScreen, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const ButtonHeader: React.FC = () => {
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
            {/* <span>{isLoggedIn ? 'Đăng Nhập' : 'Lê Chí Nghĩa'}</span> */}
            <span>Đăng Nhập</span>
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
                    <FontAwesomeIcon icon={faMobileScreen} />
                    <span style={{ fontWeight: '600' }}>Tải ứng dụng</span>
                </button>
            </div>

            <div className={cx('info')}>
                <Link to={'/RegisterPage'}>
                    <button className={cx('btnInfo')} onClick={isLoggedIn ? handleLogin : handleLogout}>
                        {renderUserInfo()}
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ButtonHeader;
