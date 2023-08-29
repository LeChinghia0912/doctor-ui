import React from 'react';
import styles from './hospital.module.scss';
import classNames from 'classnames/bind';
import data from './data';

const cx = classNames.bind(styles);
const Hospitals: React.FC = () => {
    const Data = data[0];

    return (
        <div>
            <div className={cx('headerHospitals')}>
                <div className={cx('hosiptals')}>
                    <div className={cx('styles_header')}>
                        <div className={cx('title')}>{Data.title}</div>
                        <div className={cx('description')}>{Data.description}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hospitals;
