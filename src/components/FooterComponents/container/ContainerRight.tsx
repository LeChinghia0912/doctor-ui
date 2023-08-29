import React from 'react';
import styles from './Container.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { footerDichVu, footerCoSo, footerNews, footerAbout, footerHuongDan } from './data';

const cx = classNames.bind(styles);

const ContainerRight: React.FC = () => {
    return (
        <div className={cx('styles_right')}>
            <div style={{ marginLeft: '-8px', marginRight: '-8px', rowGap: '16px', display: 'flex' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginRight: '95px' }}>
                    <div className={cx('title')}>
                        Dịch vụ y tế
                        <ul>
                            {footerDichVu.map((item, index) => (
                                <li key={index}>
                                    <Link to={''}>{item.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={cx('title')}>
                        Cơ sở y tế
                        <ul>
                            {footerCoSo.map((item, index) => (
                                <li key={index}>
                                    <Link to={''}>{item.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginRight: '95px' }}>
                    <div className={cx('title')}>
                        Tin Tức
                        <ul>
                            {footerNews.map((item, index) => (
                                <li key={index}>
                                    <Link to={''}>{item.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={cx('title')}>
                        Hướng Dẫn
                        <ul>
                            {footerHuongDan.map((item, index) => (
                                <li key={index}>
                                    <Link to={''}>{item.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div className={cx('title')}>
                        Về chúng tôi
                        <ul>
                            {footerAbout.map((item, index) => (
                                <li key={index}>
                                    <Link to={''}>{item.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContainerRight;
