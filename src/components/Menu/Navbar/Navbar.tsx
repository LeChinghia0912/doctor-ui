import React from 'react';
import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
const Navbar = () => {
    return (
        <div className={cx('navbar')}>
            <ul>
                <li>
                    <div id="item" className={cx('item')}>
                        <a href="/#">
                            Cơ sở y tế <FontAwesomeIcon icon={faCaretDown} />
                        </a>
                    </div>
                </li>
                <li>
                    <div id="item" className={cx('item')}>
                        <a href="/#">
                            Dịch vụ y tế <FontAwesomeIcon icon={faCaretDown} />
                        </a>
                    </div>
                </li>
                <li>
                    <div id="item" className={cx('item')}>
                        <a href="/#">Gói khám</a>
                    </div>
                </li>
                <li>
                    <div id="item" className={cx('item')}>
                        <a href="/#">
                            Hưỡng dẫn <FontAwesomeIcon icon={faCaretDown} />
                        </a>
                    </div>
                </li>
                <li>
                    <div id="item" className={cx('item')}>
                        <a href="/#">
                            Tin tức <FontAwesomeIcon icon={faCaretDown} />
                        </a>
                    </div>
                </li>
                <li>
                    <div id="item" className={cx('item')}>
                        <a href="/#">Về chúng tôi</a>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
