import React from 'react';
import styles from './BookingPage.module.scss';
import classNames from 'classnames/bind';
import Container from '../../layouts/BookingLayout/breadcrumb/Container';
import ChooseFeature from '../../layouts/BookingLayout/chooseFeature/ChooseFeature';

const cx = classNames.bind(styles);

const BookingPage: React.FC = () => {
    return (
        <div className={cx('body')}>
            <div className={cx('breadcrumb')}>
                <Container />
            </div>
            <div className={cx('chooseFeature')}>
                <ChooseFeature />
            </div>
        </div>
    );
};

export default BookingPage;
