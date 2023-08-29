import React from 'react';
import styles from './ButtonHeader.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
const Button: React.FC = () => {
    return (
        <div style={{ width: '80%' }}>
            <Link style={{ textDecoration: 'none' }} to={'/login'}>
                <button className={cx('style')}>
                    <div style={{ color: '#fff' }}>Tiếp tục</div>
                </button>
            </Link>
        </div>
    );
};

export default Button;
