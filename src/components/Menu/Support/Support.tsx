import React from 'react';
import classNames from 'classnames/bind';
import styles from './Support.module.scss';
import Phone from '../../Images/Phone';

const cx = classNames.bind(styles);

const Support: React.FC = () => {
    return (
        <a href="/">
            <div className={cx('support')}>
                <div className={cx('icon')}>
                    <span className={cx('text')}>
                        <span
                            style={{
                                boxSizing: 'border-box',
                                display: 'block',
                                width: 'initial',
                                height: 'initial',
                                background: 'none',
                                opacity: 1,
                                border: 0,
                                margin: 0,
                                padding: 0,
                                maxWidth: '100%',
                            }}
                        >
                            <Phone />
                        </span>
                    </span>
                </div>
                <div className={cx('titleSupport')}>
                    Hỗ trợ đặt khám
                    <div
                        style={{
                            fontSize: '25px',
                            fontWeight: 700,
                            color: '#ffb54a',
                            lineHeight: '29.3px',
                        }}
                    >
                        1900 2115
                    </div>
                </div>
            </div>
        </a>
    );
};

export default Support;
