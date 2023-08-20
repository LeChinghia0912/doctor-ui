import React from 'react';
import styles from './Wrapper.module.scss';
import classNames from 'classnames/bind';
import BtnNow from '../Button/BtnNow';

const cx = classNames.bind(styles);

const WrapperHeader: React.FC = () => {
    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('tag')}>Nền tảng công nghệ</div>
                <div className={cx('title')}>
                    <span className={cx('line1')}>Kết nối người dân với</span>
                    <span className={cx('line1')}>Cơ sở - Dịch vụ Y tế</span>
                </div>
                <div className={cx('desc')}>Đặt khám nhanh - Lấy số thứ tự trực tuyến - Tư vấn sức khỏe từ xa</div>
            </div>

            <BtnNow />
        </>
    );
};

export default WrapperHeader;
