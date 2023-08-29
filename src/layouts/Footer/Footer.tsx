import React from 'react';
import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import Container from '../../components/FooterComponents/container/Container';
import CopyRight from '../../components/FooterComponents/copyRight/CopyRight';

const cx = classNames.bind(styles);
const Footer: React.FC = () => {
    return (
        <div className={cx('index_footer')}>
            <div className={cx('container')}>
                <Container />
            </div>
            <div className={cx('footerCopyRight')}>
                <CopyRight />
            </div>
        </div>
    );
};

export default Footer;
