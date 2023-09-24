import React from 'react';
import classNames from 'classnames/bind';
import styles from './Styles.module.scss';
import HeaderLayoutDoctor from './HeaderLayoutDocTor/HeaderLayoutDoctor';
import BodyLayoutDocTor from './BodyLayoutDoctor/BodyLayoutDocTor';

const cx = classNames.bind(styles);

const DoctorLayout: React.FC = () => {
    return (
        <div className={cx('main')}>
            <div className={cx('header')}>
                <HeaderLayoutDoctor />
            </div>

            <div className={cx('body')}>
                <BodyLayoutDocTor />
            </div>
        </div>
    );
};

export default DoctorLayout;
