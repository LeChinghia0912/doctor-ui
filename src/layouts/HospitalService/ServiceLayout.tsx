import React from 'react';
import classNames from 'classnames/bind';
import styles from './Styles.module.scss';
import HeaderService from './HeaderServiceLayout/HeaderService';
import BodyLayout from './BodyServiceLayout/BodyLayout';

const cx = classNames.bind(styles);

const ServiceLayout: React.FC = () => {
    return (
        <div className={cx('main')}>
            <div className={cx('header')}>
                <HeaderService />
            </div>

            <div className={cx('body')}>
                <BodyLayout />
            </div>
        </div>
    );
};

export default ServiceLayout;
