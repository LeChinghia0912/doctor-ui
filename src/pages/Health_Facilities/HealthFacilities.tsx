import React from 'react';
import classNames from 'classnames/bind';
import styles from './HealthFacilities.module.scss';
import Header from '../../layouts/HeaderLayout/Header';
import Hospitals from '../../components/BasisHospital/TitleHead/Hospitals';
import SearchForm from '../../components/BasisHospital/Search/SearchForm';
import ButtonTag from '../../components/Button/ButtonWrapper/ButtonTag';
import btnData from '../../components/Button/ButtonWrapper/btnData';
import InfoHospital from '../../layouts/HospitalLayout/InfoHospital';

const cx = classNames.bind(styles);

const HealthFacilities: React.FC = () => {
    return (
        <>
            <div className={cx('main')}>
                <Header />

                <Hospitals />

                <SearchForm />

                <div className={cx('tag')}>
                    {btnData.map((tag, index) => (
                        <ButtonTag key={index} bgColor="#ebf9fd" textColor="#11a2f3" title={tag.title} />
                    ))}
                </div>
                <div className={cx('style_container')}>
                    <InfoHospital />
                </div>
            </div>
        </>
    );
};

export default HealthFacilities;
