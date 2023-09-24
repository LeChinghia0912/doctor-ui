import React from 'react';
import styles from './LoginPage.module.scss';
import classNames from 'classnames/bind';
import ImgRegister from '../../assets/images/LeftRegister.png';
import LoginForm from '../../components/LoginForm/LoginForm';

const cx = classNames.bind(styles);

const imgRegisterStyle = {
    backgroundImage: `url(${ImgRegister})`,
    width: '50%',
    height: '100%',
};

const BackgroundImage: React.FC<{ style: React.CSSProperties }> = ({ style }) => (
    <div className={cx('bg_img')} style={style}>
        <div className={cx('shape')}></div>
    </div>
);

const LoginPage: React.FC = () => {
    return (
        <div className={cx('wrapper_template')}>
            <div className={cx('wrapper_content')}>
                <div className={cx('row_full_screen')}>
                    <div className={cx('left')}>
                        <LoginForm />
                    </div>
                    <div className={cx('right')}>
                        <BackgroundImage style={imgRegisterStyle} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
