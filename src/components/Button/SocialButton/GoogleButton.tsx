import React from 'react';
import classNames from 'classnames/bind';
import styles from './Style.module.scss';
import google from '../../../assets/images/google.png';

const cx = classNames.bind(styles);

const GoogleButton: React.FC = () => {
    return (
        <div className={cx('group_socialBtn')}>
            <ul className={cx('socialBtnList')}>
                <li>
                    <button className={cx('socialBtn', 'googleBtn')}>
                        <div className={cx('buttonContent')}>
                            <div className={cx('logo')}>
                                <img src={google} alt="Google" className={cx('logoImg')} />
                                <span>ĐĂNG NHẬP VỚI GOOGLE</span>
                            </div>
                        </div>
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default GoogleButton;
