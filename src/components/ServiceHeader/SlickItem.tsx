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
    <div style={{ width: '100%', display: 'inline-block' }} className="item">
        <div className={cx('card')}>
            <Link style={{ textDecoration: 'none' }} to={item.link}>
                <span className={cx('icon')}>
                    <div className={cx('img')} style={{ backgroundImage: `url(${item.icon})` }}></div>
                </span>
                <div className={cx('title')}>{item.title}</div>
            </Link>
        </div>
    </div>
);

export default SlickItemComponent;
