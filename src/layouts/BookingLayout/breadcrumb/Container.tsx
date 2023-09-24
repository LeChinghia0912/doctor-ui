import React from 'react';
import styles from './Container.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const Container: React.FC = () => {
    return (
        <div className={cx('container')}>
            <ul>
                <li>
                    <Link to={'/'}>Trang Chủ</Link>
                    <FontAwesomeIcon icon={faAngleRight} />
                </li>
                <li>
                    <Link to={'/Cơ_Sở_Y_Tế'}>Cơ sở y tế</Link>
                    <FontAwesomeIcon icon={faAngleRight} />
                </li>
                <li>
                    <Link to={'/hinh-thuc-dat-kham'}>Hình thức đặt khám</Link>
                </li>
            </ul>
        </div>
    );
};

export default Container;
