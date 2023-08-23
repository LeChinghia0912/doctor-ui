import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import NetWork from '../../components/SocialNetwork/NetWork';
import ButtonHeader from '../../components/Button/ButtonHeader';

const cx = classNames.bind(styles);

const MenuHeader: React.FC = () => {
    const [isMenuHidden, setIsMenuHidden] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            if (scrollPosition > 100) {
                setIsMenuHidden(true);
            } else {
                setIsMenuHidden(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={cx('header', { hidden: isMenuHidden })}>
            <div className="network">
                <NetWork />
            </div>
            <ButtonHeader />
        </div>
    );
};

export default MenuHeader;
