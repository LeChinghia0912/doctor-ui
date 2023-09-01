import React from 'react';
import styles from './style.module.scss';
import classNames from 'classnames/bind';
import ListData from './ListData';
import BtnControl from '../../Button/BtnControl/BtnControl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const ListHospital = () => {
    return (
        <>
            {ListData.map((hospital) => (
                <div key={hospital.id} className={cx('details')}>
                    <div className={cx('card')}>
                        {/* Thông tin Bệnh viện */}

                        <div className={cx('DetailInfo')}>
                            <div className={cx('cardImage')}>
                                <img src={hospital.image} alt={hospital.title} />
                            </div>

                            <div className={cx('cardBody')}>
                                <div className={cx('cardContent')}>
                                    <p className={cx('title')}>{hospital.title}</p>
                                    <p className={cx('contentItem')}>
                                        <FontAwesomeIcon icon={faLocationDot} />
                                        {hospital.address}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* BttonContro Đặt khám ngay */}

                        <BtnControl />
                    </div>
                </div>
            ))}
        </>
    );
};

export default ListHospital;
