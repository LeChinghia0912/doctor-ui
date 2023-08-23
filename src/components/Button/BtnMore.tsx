import React from 'react';
import classNames from 'classnames/bind';
import styles from './ButtonHeader.module.scss';

const cx = classNames.bind(styles);

const BtnMore: React.FC = () => {
    return (
        <div className={cx('btnMore')}>
            <div className={cx('bg')}>
                <div className={cx('text')}>Xem thêm {`>>>`}</div>
            </div>
        </div>
    );
};

export default BtnMore;
