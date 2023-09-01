import React from 'react';
import styles from './Body.module.scss';
import classNames from 'classnames/bind';
import SearchForm from '../../../components/BasisHospital/Search/SearchForm';
import ListHospital from '../../../components/Benh_Vien/ListContent/ListHospital';

const cx = classNames.bind(styles);

const BodyLayout: React.FC = () => {
    return (
        <>
            <div className={cx('search')}>
                <SearchForm />
            </div>
            <div className={cx('list')}>
                <ListHospital />
            </div>
        </>
    );
};

export default BodyLayout;
