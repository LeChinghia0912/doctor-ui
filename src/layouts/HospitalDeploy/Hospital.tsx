import React from 'react';
import styles from './Hospital.module.scss';
import classNames from 'classnames/bind';
import MultipleHospital from './MultipleHospital';
import deploy from './DeployData';

const cx = classNames.bind(styles);

const Hospital: React.FC = () => {
    return (
        <div className={cx('hospitalDeploy')}>
            <div className={cx('header')}>
                <div className={cx('title')}>Hệ thống bệnh viện triển khai</div>
                <div className={cx('desc')}>Đặt lịch khám với hơn 50 bệnh viện trên khắp cả nước</div>
            </div>
            <div className={cx('listHospital')}>
                <MultipleHospital data={deploy} />
            </div>
        </div>
    );
};

export default Hospital;
