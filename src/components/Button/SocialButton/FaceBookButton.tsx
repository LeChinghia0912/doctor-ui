import React from 'react';
import classNames from 'classnames/bind';
import styles from './Style.module.scss';
import facebook from '../../../assets/images/facebook.png';
const cx = classNames.bind(styles);

const FaceBookButton: React.FC = () => {
    return (
        <div className={cx('group_socialBtn')}>
            <ul>
                <li>
                    <button className={cx('faceBtn')}>
                        <div style={{ width: '230px', paddingLeft: '10px' }}>
                            <div style={{ width: '300px', display: 'flex', alignItems: 'center', fontSize: '12px' }}>
                                <span className={cx('logo')}>
                                    <img src={facebook} alt="googe" />
                                    <span>ĐĂNG NHẬP VỚI FACEBOOK</span>
                                </span>
                            </div>
                        </div>
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default FaceBookButton;
