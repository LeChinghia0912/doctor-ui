import React from 'react';
import { Link } from 'react-router-dom';
import { SlickItem } from './swipeToSlideData';
import classNames from 'classnames/bind';
import styles from './Slider.module.scss';

const cx = classNames.bind(styles);

interface SlickItemProps {
    item: SlickItem;
}

const SlickItemComponent: React.FC<SlickItemProps> = ({ item }) => (
    <div className={cx('item')}>
        <div className={cx('card')}>
            <Link style={{ textDecoration: 'none' }} to={item.link}>
                <div className={cx('icon')}>
                    <div
                        className={cx('img')}
                        style={{
                            backgroundImage: `url(${item.icon})`,
                            marginTop: '15px',
                            width: '70px',
                            height: '70px',
                        }}
                    ></div>
                </div>
                <div className={cx('title')}>{item.title}</div>
            </Link>
        </div>
    </div>
);

export default SlickItemComponent;
