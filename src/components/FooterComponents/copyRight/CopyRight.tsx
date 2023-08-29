import React from 'react';
import styles from './copyRight.module.scss';
import classNames from 'classnames/bind';
import icon from '../../../assets/images/footer.png';

const cx = classNames.bind(styles);
const CopyRight: React.FC = () => {
    return (
        <div>
            <p className={cx('footerItem')}>
                <span style={{ paddingRight: '15px' }}>© 2020 - Bản quyền thuộc Công Ty Cổ Phần Ứng Dụng PKH</span>
                <span>
                    <img src={icon} alt="" />
                </span>
            </p>
        </div>
    );
};

export default CopyRight;
