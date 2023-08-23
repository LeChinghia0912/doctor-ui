import React from 'react';
import classNames from 'classnames/bind';
import styles from './Statistic.module.scss';
import DataStatistic from './StatisticData'; // Import the icon data

const cx = classNames.bind(styles);

const Statistic: React.FC = () => {
    return (
        <div className={cx('statistic')}>
            <div className={cx('title')}>Số liệu thống kê</div>
            <div className={cx('body')}>
                <ul>
                    {DataStatistic.map((item, index) => (
                        <li key={index}>
                            <div className={cx('image')}>
                                <img src={item.icon} alt={''}></img>
                            </div>

                            <div className={cx('number')}>{item.number}</div>

                            <div className={cx('content')}>{item.desc}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Statistic;
