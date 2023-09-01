import React from 'react';
import styles from './HospitalLayout.module.scss';
import classNames from 'classnames/bind';
import ListHospital from '../../components/Benh_Vien/ListContent/ListHospital';
import Introduce from '../../components/Benh_Vien/HospitalIntroduce/Introduce';
import BtnDowloadApp from '../../components/Button/BtnDowloadApp/BtnDowloadApp';

const cx = classNames.bind(styles);
const InfoHospital: React.FC = () => {
    return (
        <div className={cx('list_hospital')}>
            <div className={cx('content')}>
                <div className={cx('list_content')}>
                    {/* Danh sách Bệnh viên công */}
                    <ListHospital />
                </div>
                <div className={cx('colum')}>
                    {/* hospitalIntroduce */}
                    <div className={cx('hospitalIntroduce')}>
                        <Introduce />
                    </div>
                    {/* downloadApp */}
                    <BtnDowloadApp />
                </div>
            </div>
        </div>
    );
};

export default InfoHospital;
