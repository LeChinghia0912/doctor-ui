import React from 'react';
import classNames from 'classnames/bind';
import styles from './Service.module.scss';
import ServiceLayout from '../../layouts/HospitalService/ServiceLayout';

const cx = classNames.bind(styles);

const ServicePage: React.FC = () => {
    return (
        <div className={cx('body')}>
            <div style={{ maxWidth: '100%', margin: 'auto' }}>
                <ServiceLayout />
            </div>
        </div>
    );
};

export default ServicePage;
