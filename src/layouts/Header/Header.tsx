import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Logo from '../../components/Images/Logo';
import Support from '../../components/Menu/Support/Support';
import Navbar from '../../components/Menu/Navbar/Navbar';
import MenuHeader from './MenuHeader';

const cx = classNames.bind(styles);

const Header: React.FC = () => {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Logo />
                </div>

                <div className={cx('menu')}>
                    <MenuHeader />

                    <div className={cx('body')}>
                        <Support />
                        <Navbar />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
