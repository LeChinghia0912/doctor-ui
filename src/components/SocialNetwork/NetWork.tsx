import React from 'react';
import classNames from 'classnames/bind';
import styles from './NetWork.module.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as TiktokSVG } from '../../assets/images/tiktok.svg';
import { ReactComponent as FaceSVG } from '../../assets/images/facebook.svg';
import { ReactComponent as YoutubeSVG } from '../../assets/images/youtube.svg';

const cx = classNames.bind(styles);
const NetWork: React.FC = () => {
    return (
        <div className={cx('network')}>
            <Link
                className={cx('text_a')}
                style={{ textDecoration: 'none', display: 'flex' }}
                to={'https://www.tiktok.com/'}
            >
                <div className={cx('icon')}>
                    <TiktokSVG />
                </div>
                Tiktok
            </Link>
            |
            <Link
                className={cx('text_a')}
                style={{ textDecoration: 'none', display: 'flex' }}
                to={'https://www.facebook.com/'}
            >
                <div className={cx('icon')}>
                    <FaceSVG />
                </div>
                FaceBook
            </Link>
            |
            <Link
                className={cx('text_a')}
                style={{ textDecoration: 'none', display: 'flex' }}
                to={'https://www.youtube.com/'}
            >
                <div className={cx('icon')}>
                    <YoutubeSVG />
                </div>
                Youtube
            </Link>
        </div>
    );
};

export default NetWork;
