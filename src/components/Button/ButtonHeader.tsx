import React, { useState } from 'react'
import classNames from 'classnames/bind';
import styles from './ButtonHeader.module.scss';
import Bellicon from '../../assets/Icons/Bellicon.svg'
import BtnDowload from '../../assets/Icons/Dowload.svg'
import Info from '../../assets/Icons/Info.svg'


const cx = classNames.bind(styles);
const ButtonHeader = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Xử lý đăng nhập ở đây
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Xử lý đăng xuất ở đây
    setIsLoggedIn(false);
  };

  return (
    <div className={cx('buttonWrapper')}>
      <div className={cx('notification')}>
        <div>
            <span className={cx('badge')}>
                <span className={cx('icon')}>
                    <img 
                        src={Bellicon} 
                        alt='Chuông thông báo'/>
                </span>
            </span>
        </div>
      </div>
      {/* Btn tải ứng dụng */}
      <div className={cx('dowload')}>
        <button className={cx('btnDowload')}>
            <img 
                src={BtnDowload} 
                alt='Tải ứng dụng'
            />
            <span style={{ fontWeight: '700' }}>Tải ứng dụng</span>
        </button>
      </div>

      {/* Thông tin */}
      <div className={cx('info')}>
      <button className={cx('btnInfo')} onClick={isLoggedIn ? handleLogout : handleLogin}>
        <div className={cx('text')}>
          <div className={cx('icon')}>
            <img 
              src={Info} 
              alt='info'/>
          </div>
          <span>{isLoggedIn ? 'Lê Chí Nghĩa' : 'Đăng nhập'}</span>
        </div>
      </button>
    </div>
    </div>
  )
}

export default ButtonHeader
