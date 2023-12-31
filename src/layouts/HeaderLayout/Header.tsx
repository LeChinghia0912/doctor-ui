import React from 'react';
import styles from './Styles.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
const Header: React.FC = () => {
    return (
        <div className={cx('containerPartner')}>
            <ul>
                <li>
                    <Link to={'/'}>Trang Chủ</Link>
                    <FontAwesomeIcon icon={faAngleRight} />
                </li>

                <li>
                    <Link to={'/Cơ_Sở_Y_Tế'}>Cơ sở Y tế</Link>
                </li>
            </ul>
        </div>
    );
};

export default Header;
