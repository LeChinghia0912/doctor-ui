import React from 'react';
import styles from './Styles.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
const Header: React.FC = () => {
    return (
        <div className={cx('containerPartner')}>
            <ul>
                <li>
                    <Link to={'/'}>Trang Chủ</Link>
                </li>
                <li>
                    <Link to={'/Cơ_Sở_Y_Tế'}>Cơ sở Y tế</Link>
                </li>
            </ul>
        </div>
    );
};

export default Header;
