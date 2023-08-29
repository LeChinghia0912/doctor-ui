import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Logo from '../Images/Logo';
import Button from '../Button/Button';
import InputForm from '../Input/InputForm';
import GoogleButton from '../Button/SocialButton/GoogleButton';
import FaceBookButton from '../Button/SocialButton/FaceBookButton';
import styles from './Register.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const RegisterForm: React.FC = () => {
    return (
        <>
            <div className={cx('wrapper_header')}>
                <button className={cx('icon_back')}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <div className={cx('container_logo')}>
                    <Link to={'/'}>
                        <Logo />
                    </Link>
                </div>
            </div>
            <div className={cx('wrapper_child')}>
                <div className={cx('inner_content')}>
                    <p className={cx('text_center')}>Vui lòng nhập số điện thoại để tiếp tục</p>
                    <InputForm />
                    <div className={cx('wrapper_input')}></div>

                    <Button />

                    <p style={{ fontSize: '14px', marginTop: '3rem', marginBottom: '1rem' }}>
                        Hoặc đăng nhập bằng tài khoản
                    </p>
                    {/* icon đăng nhập với tk mã hội */}
                    <GoogleButton />
                    <FaceBookButton />
                </div>
            </div>
        </>
    );
};

export default RegisterForm;
