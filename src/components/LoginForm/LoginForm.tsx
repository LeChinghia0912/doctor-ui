import React, { useState } from 'react';
import PhoneInput from '../Input/PhoneInput';
import PasswordInput from '../Input/PasswordInput';
import SubmitButton from '../Button/Button';
import classNames from 'classnames/bind';
import styles from './LoginForm.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Logo from '../Images/Logo';
import axios from 'axios';

const cx = classNames.bind(styles);

const LoginForm: React.FC = () => {
    const [phone, setPhone] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSubmit = async () => {
        try {
            const response = await axios.post('', {
                phone: phone,
                password: password,
            });
            console.log('Phản hồi từ máy chủ:', response.data);
        } catch (error) {
            console.error('Lỗi khi gửi yêu cầu đăng nhập:', error);
        }
    };

    return (
        <>
            <div className={cx('wrapper_header')}>
                <button className={cx('icon_back')}>
                    <FontAwesomeIcon icon={faArrowLeft} />{' '}
                </button>
                <div className={cx('container_logo')}>
                    <Link to={'/'}>
                        <Logo />
                    </Link>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className={cx('wrapper_child')}>
                    <div className={cx('inner_content')}>
                        <p className={cx('text_center')}>Vui lòng đăng nhập để tiếp tục</p>
                        <PhoneInput setPhone={setPhone} />
                        <PasswordInput setPassword={setPassword} />
                        <SubmitButton onClick={handleSubmit} />
                    </div>
                </div>
            </form>
        </>
    );
};

export default LoginForm;
