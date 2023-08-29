import React from 'react';
import styles from './Container.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Logo from '../../Images/Logo';
import ContainerRight from './ContainerRight';

export interface InFo {
    address: string;
    website: string;
    email: string;
    phone: string;
}

const infoData: InFo[] = [
    {
        address: '97 Trần Quang Diệu, Phường 14, Quận 3, Tp. Hồ Chí Minh.',
        website: ' https://pkh.vn',
        email: 'cskh@medpro.vn',
        phone: '(028) 710 78098',
    },
];

const cx = classNames.bind(styles);

const Container: React.FC = () => {
    const info = infoData[0];
    const { address, website, email, phone } = info;

    return (
        <div className={cx('styles')}>
            <div className={cx('styles_left')}>
                <Link style={{ textDecoration: 'none' }} to={'/'}>
                    <Logo />
                    <p style={{ borderTop: '2px solid #1da1f2' }}>Đặt khám nhanh</p>
                </Link>

                <ul>
                    <li>
                        <span className={cx('title')}>Địa chỉ : </span>
                        {address}
                    </li>
                    <li>
                        <span className={cx('title')}>Website : </span>
                        {website}
                    </li>
                    <li>
                        <span className={cx('title')}>Email : </span>
                        {email}
                    </li>
                    <li>
                        <span className={cx('title')}>Số điện thoại : </span>
                        {phone}
                    </li>
                </ul>
            </div>
            <ContainerRight />
        </div>
    );
};

export default Container;
