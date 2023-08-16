import React from 'react'
import classNames from 'classnames/bind';
import styles from '../../layouts/Header/Header.module.scss';
import tiktokSVG from '../../assets/images/tiktok.svg';
import faceSVG from '../../assets/images/facebook.svg';
import youtobeSVG from '../../assets/images/youtube.svg';


const cx = classNames.bind(styles);
const NetWork: React.FC = () => {
  return (
      <div className={cx('network')}>
        <a 
            className={cx('text_a')} 
            style={{textDecoration: 'none', display: 'flex',}} 
            href='https://www.tiktok.com/'>
            <div className={cx('icon')}>
                <img src={tiktokSVG} alt='Tiktok Icon' />
            </div>
            Tiktok
        </a>|
        <a 
            className={cx('text_a')} 
            style={{textDecoration: 'none', display: 'flex',}} 
            href='https://www.facebook.com/'>
            <div className={cx('icon')}>
                <img src={faceSVG} alt='FaceBook Icon' />
            </div>
            FaceBook
        </a>|
        <a 
            className={cx('text_a')} 
            style={{textDecoration: 'none', display: 'flex',}} 
            href='https://www.youtube.com/'>
            <div className={cx('icon')}>
                <img src={youtobeSVG} alt='Youtube Icon' />
            </div>
            Youtube
        </a>
      </div>
    
  )
}

export default NetWork
