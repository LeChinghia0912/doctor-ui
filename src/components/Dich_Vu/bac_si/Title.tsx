import React from 'react';
import classNames from 'classnames/bind';
import styles from './title.module.scss';
import data from './data';

const cx = classNames.bind(styles);

const Title: React.FC = () => {
    const item = data[0];
    return (
        <div className={cx('title')}>
            <div className={cx('card')}>
                <div className={cx('content')}>
                    <p>Dịch Vụ</p>
                    <h1>{item.title}</h1>
                    <div className={cx('span')}>
                        {item.introduce1}
                        <br />
                        {item.introduce2}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Title;
