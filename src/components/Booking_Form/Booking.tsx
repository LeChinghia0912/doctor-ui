import React from 'react';
import styles from './BookingForm.module.scss';
import classNames from 'classnames/bind';
import calendar from '../../assets/images/calendar.png';
import bookingdoctor from '../../assets/images/bookingdoctor.png';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Booking: React.FC = () => {
    return (
        <>
            <div className={cx('colTitle')}>
                <div className={cx('title')}>Các hình thức đặt khám</div>
                <div className={cx('desc')}>
                    Đặt khám nhanh chóng, không phải chờ đợi với nhiều cơ sở y tế trên khắp các tỉnh thành
                </div>
            </div>

            <div className={cx('colBoxService')}>
                <ul className={cx('chooseFeatureList')}>
                    <li className={cx('chooseFeatureListItem')}>
                        <Link to={'/kham-chuyen-khoa'}>
                            <div className={cx('card')}>
                                <img src={calendar} alt="" style={{ width: '35px', height: '35px' }} />

                                <div className={cx('name')}>Đặt khám theo chuyên khoa</div>
                            </div>
                        </Link>
                    </li>
                    <li className={cx('chooseFeatureListItem')}>
                        <Link to={'/kham-bac-si'}>
                            <div className={cx('card')}>
                                <img src={bookingdoctor} alt="" style={{ width: '35px', height: '35px' }} />
                                <div className={cx('name')}>Đặt khám theo Bác Sỹ</div>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Booking;
