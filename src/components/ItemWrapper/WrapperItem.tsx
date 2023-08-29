import React from 'react';
import styles from './WrapperItem.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import dataWrapper from './ItemWrapper';
import BtnMore from '../Button/BtnMore';
const cx = classNames.bind(styles);

const WrapperItem: React.FC = () => {
    return (
        <div className={cx('item-list')}>
            {dataWrapper.map((wrapper, index) => (
                <div key={index} className={cx('item')}>
                    <div className={cx('card')}>
                        <Link style={{ textDecoration: 'none' }} to={wrapper.link}>
                            <div className={cx('cardTitle')}>
                                <span className={cx('card-img')}>
                                    <img alt="" src={wrapper.icon}></img>
                                </span>

                                <div className={cx('title')}>{wrapper.title}</div>
                                <div className={cx('desc')}>{wrapper.desc}</div>
                            </div>
                        </Link>

                        <BtnMore />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default WrapperItem;
